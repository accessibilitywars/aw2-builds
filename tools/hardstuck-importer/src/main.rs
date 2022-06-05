use std::error;
use std::io;
use std::process;
use std::process::Command;
use std::fs::OpenOptions;
use std::io::Write;

use indoc::indoc;
use serde::Deserialize;

type Result<T> = std::result::Result<T, Box<dyn error::Error>>;

#[allow(dead_code)]
#[derive(Debug, Deserialize)]
struct Build {
    winners: String,
    accountname: String,
    desc: String,
    role: String,
	class: String,
	apm: u64,
	build: String,
	example1: String,
	example2: String,
	example3: String,
	chatcode: String,
	gearcode: String,
}

fn chat2markup(chatcode: String) -> Result<String> {
	let output = Command::new("chatr")
		.arg(chatcode)
		.output()
		.expect("failed to execute chatr");

	Ok(String::from_utf8_lossy(&output.stdout).into_owned())
}

fn convert(line: u64, build: Build, stem: String) -> Result<()> {
	let simulated_filepath = "2022-06-05-HSAC-".to_owned() + &stem.replace(" ", "-") + ".md";
	println!("Converting {}: {profession} {category}: {data} -> {file}",
		line,
		profession = build.class,
		category = build.winners,
		// data = build.build,
		data = build.chatcode,
		file = simulated_filepath,
	);

	let markupcode = match chat2markup(build.chatcode.clone()) {
		Ok(chatcode) => chatcode,
		Err(_) => "".to_string()
	};

	let contents = format!(indoc! {"
		---
		author: {accountname}
		editor: berdandy
		title: Accessibility Contest - {profession} {category}
		tags: {profession} {role}
		spec: {lc_profession}
		---

		{desc}
		
		## Traits and Skills
		
		Template Code:
		
		{chatr_output}

		## References

		- {build}
	"},
		accountname = build.accountname,
		profession = build.class,
		lc_profession = build.class.to_lowercase(),
		role = build.role,
		category = build.winners,
		desc = build.desc,
		chatr_output = markupcode,
		build = build.build,
	);

	let mut candidate = stem.clone();
	let mut output = loop {
		let filepath = "2022-06-05-HSAC-".to_owned() + &candidate.replace(" ", "-") + ".md";
		match OpenOptions::new().write(true).create_new(true).open(filepath) {
			Err(_) => candidate = candidate.clone() + "_Alt",
			Ok(file) => break file,
		}
	};
    write!(output, "{}", contents)?;

	Ok(())
}

fn process() -> Result<()> {
    let mut rdr = csv::Reader::from_reader(io::stdin());
	let mut line = 0;
    for result in rdr.deserialize() {
		line += 1;
        let build: Build = result?;
		let profession = build.class.clone();
		let category = build.winners.clone();
		convert(line, build, format!("{} {}", profession, category))?;
    }
    Ok(())
}

fn main() {
    if let Err(err) = process() {
        println!("error: {}", err);
        process::exit(1);
    }
}

use std::error;
use std::io;
use std::process;
use std::process::Command;

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

/*
fn dump(line: u64, build: Build) {
	println!("{}: {profession} {category}: {data}",
		line,
		profession = build.class,
		category = build.winners,
		data = build.chatcode,
	)
}
*/

fn chat2markup(chatcode: String) -> Result<String> {
	let output = Command::new("chatr")
		.arg(chatcode)
		.output()
		.expect("failed to execute chatr");

	Ok(String::from_utf8_lossy(&output.stdout).into_owned())
}

fn convert(line: u64, build: Build) {
	println!("Converting {}: {profession} {category}: {data} -> stdout",
		line,
		profession = build.class,
		category = build.winners,
		// data = build.build,
		data = build.chatcode,
	);

	let markupcode = match chat2markup(build.chatcode.clone()) {
		Ok(chatcode) => chatcode,
		Err(_) => "".to_string()
	};

	println!(indoc! {"
		---
		author: {accountname}
		editor: berdandy
		title: Accessibility Contest - {profession} {role} {category}
		tags: {profession}
		---

		{desc}
		
		## Traits and Skills
		
		Template Code:
		
		`{chatcode}`

		{chatr_output}

		## References

		- {build}
	"},
		accountname = build.accountname,
		profession = build.class,
		role = build.role,
		category = build.winners,
		desc = build.desc,
		chatcode = build.chatcode,
		chatr_output = markupcode,
		build = build.build,
	);
}

fn process() -> Result<()> {
    let mut rdr = csv::Reader::from_reader(io::stdin());
	let mut line = 0;
    for result in rdr.deserialize() {
		line += 1;
        let build: Build = result?;
		convert(line, build);
		// dump(line, build);
    }
    Ok(())
}

fn main() {
    if let Err(err) = process() {
        println!("error: {}", err);
        process::exit(1);
    }
}

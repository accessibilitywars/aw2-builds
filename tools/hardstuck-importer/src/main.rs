use std::error::Error;
use std::io;
use std::process;

use serde::Deserialize;

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

fn dump(line: u64, build: Build) {
	println!("{}: {profession} {category}: {build_url}",
		line,
		profession = build.class,
		category = build.winners,
		build_url = build.build,
		// chatcode = build.chatcode,
	)
}

fn process() -> Result<(), Box<dyn Error>> {
    let mut rdr = csv::Reader::from_reader(io::stdin());
	let mut line = 0;
    for result in rdr.deserialize() {
		line += 1;
        let build: Build = result?;
        // println!("{:?}", build);
		if build.chatcode.is_empty() {
		  dump(line, build);
		}
    }
    Ok(())
}

fn main() {
    if let Err(err) = process() {
        println!("error: {}", err);
        process::exit(1);
    }
}

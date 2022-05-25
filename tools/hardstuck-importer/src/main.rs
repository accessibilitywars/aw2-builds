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
}

fn process() -> Result<(), Box<dyn Error>> {
    let mut rdr = csv::Reader::from_reader(io::stdin());
    for result in rdr.deserialize() {
        let build: Build = result?;
        println!("{:?}", build);
    }
    Ok(())
}

fn main() {
    if let Err(err) = process() {
        println!("error running example: {}", err);
        process::exit(1);
    }
}

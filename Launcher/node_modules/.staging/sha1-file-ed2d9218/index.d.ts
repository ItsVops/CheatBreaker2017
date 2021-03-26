declare const sha1File: {
	/**
	Get the SHA1 of a file.
	@param filepath The path to the file to hash.
	@example
	```
	const sha1File = require("sha1-file");

	(async () => {
		await sha1File("file.txt");
		//=> "a0b65939670bc2c010f4d5d6a0b3e4e4590fb92b"
	})();
	```
	*/
	(filepath: string): Promise<string>

	/**
	Synchronously get the SHA1 of a file.
	@param filepath The path to the file to hash.
	@example
	```
	const sha1File = require("sha1-file");

	sha1File.sync("file.txt");
	//=> "a0b65939670bc2c010f4d5d6a0b3e4e4590fb92b"
	```
	*/
	sync(filepath: string): Promise<string>
}

export = sha1File

# shiny-octo-doodle

> "Great repository names are short and memorable. Need inspiration? How about shiny-octo-doodle." - GitHub

### Drips Lead Insert Process

To submit leads to Drips, a properly formatted `CSV` file must be uploaded to [this](https://s3.console.aws.amazon.com/s3/buckets/drips-leads/?region=us-east-2&tab=overview) S3 bucket. The name of the file is irrelevant, but the file type must be `CSV` and headers must match **exactly** with the following:
  * `phone`
  * `email`
  * `first_name`
  * `last_name`

*An example CSV can be found right [here](https://github.com/minihorsematt/shiny-octo-doodle/blob/master/drips-leads-example.csv), in this very repo.*

Just drag and drop that bitch into the S3 bucket. Don't worry about permissions or properties on the file. The defaults will do.

> Next, next, next, upload.

That's our motto here at Mini Horse.

#### Notes
The only required attribute is `phone`. Any header/column that doesn't match **exactly** will be ignored. Note, that's twice that bold markdown has been applied to the word **exactly**. Now three. Must be important. There is also no validation located anywhere in the code above. In turn, it's all on Drips. They will either accept or deny each lead, and when processing is complete, a report will be created.

### Drips Lead Insert Report

[Here](https://s3.console.aws.amazon.com/s3/buckets/drips-lead-insert-reports/?region=us-east-2&tab=overview) you will find an S3 bucket where reports are tossed. The reports are in `JSON` format with 5 key attributes:
  * `success` - Number of successful submissions to Drips. *Integer*
  * `fail` - Array of row numbers, populated by failed submissions. *Array*
  * `error` - Error message if S3 upload or CSV parse fails. *Null | String*
  * `i` - Iterator. Total number of submissions. Success or fail. *Integer*
  * `process_time` - Pretty straight forward. *String*

[Relevant example](https://s3.us-west-1.amazonaws.com/drips-lead-insert-reports/d85c3dec-e31b-4b9d-8135-320e818481b4).

Want it formatted? [Trainers hate him](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa).

#### Notes
The report name will be identical to the upload that created it.

![dollar](https://user-images.githubusercontent.com/39743483/40743060-58b8c15c-6405-11e8-9c26-beff74b9edb2.gif)

*Nerd shit below this line.*

----------------------------

### Contribute

With Git and Node installed, clone this repo and install dependencies.

```bash
git clone https://github.com/minihorsematt/shiny-octo-doodle.git
cd shiny-octo-doodle
npm install
```

### Manual Deploy

AWS Lambda requires a compressed directory.

```bash
cd path/to/shiny-octo-doodle
zip -r ../shiny-octo-doodle.zip *
```

Upload the zip [here](https://us-west-1.console.aws.amazon.com/lambda/home?region=us-west-1#/functions/dripsLeadInsert?tab=graph).

### QA

**Why aren't the AWS S3 bucket links working? Where do I drag and drop?**

Matt- You aren't signed in to AWS. [My guess](https://github.com/minihorsematt/shiny-octo-doodle/blob/master/README.md#drips-lead-insert-process).

**The top contributor on this project is cute, can I get his number?**

Is this Matt again?

**Sub for sub?**

Sure. You first.

**Where we dropping, boys?**

![tilted](https://user-images.githubusercontent.com/39743483/40795638-855cc5b6-64b7-11e8-83a3-578a90383745.jpg)

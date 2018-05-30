# shiny-octo-doodle

> "Great repository names are short and memorable. Need inspiration? How about shiny-octo-doodle." - GitHub

### Drips Lead Insert Process

To submit leads to Drips, a properly formatted `CSV` file must be uploaded to [this](https://s3.console.aws.amazon.com/s3/buckets/drips-leads/?region=us-east-2&tab=overview) S3 bucket. The name of the file is irrelevant, but the file type (CSV) and headers must match **exactly**.
  * `phone`
  * `email`
  * `first_name`
  * `last_name`

*An example CSV can be found right [here](https://github.com/minihorsematt/shiny-octo-doodle/blob/master/drips-leads-example.csv), in this very repo.*

Just drag and drop that bitch. Don't worry about permissions or properties on the file. The defaults will do.

> Next, next, next, upload.

That's our motto here at Mini Horse.

__Notes__
The only required attribute is `phone`. Any header/column that doesn't match **exactly** will be ignored. Note, that's twice that bold markdown has been applied to the word **exactly**. Now three. Must be important. There is also no validation located anywhere in the code above. In turn, it's all on Drips. They will either accept or deny each lead, and when processing is complete, a report will be created.

### Drips Lead Insert Report

[Here](https://s3.console.aws.amazon.com/s3/buckets/drips-lead-insert-reports/?region=us-east-2&tab=overview) you will find an S3 bucket where reports are tossed. The reports are in `JSON` format with 5 key attributes:
  * `success` - Number of successful submissions to Drips. *Integer*
  * `fail` - Array of row numbers, populated by failed submission. *Array*
  * `error` - Error message if S3 upload or CSV parse fails. *Null | String*
  * `i` - Iterator. Total number of submissions. *Integer*
  * `process_time` - Pretty straight forward. *String*

[Relevant example](https://s3.us-west-1.amazonaws.com/drips-lead-insert-reports/d85c3dec-e31b-4b9d-8135-320e818481b4)

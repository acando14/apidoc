## How to use command

First operation, the POSTMAN TOKEN must be exported =>

`
    export POSTMAN_APIKEY='PMAK-XXX';
`

## Output folder

All the generated files will be stored in `apidoc` folder.

To view all collections inside a worksapce you can yse this command :
```shell
list-collections --workspace xxxxxxxx-c97b-4c10-8b6f-xxxxxxxxxxx
```
and the output will be :

```text
    * MyCollection1 => xxxxxxxx-a914-4e99-bd55-xxxxxxxxxxx
    * MyCollection2 => xxxxxxxx-e125-40bb-afab-xxxxxxxxxxx
    * MyCollection3 => xxxxxxxx-28d8-4844-be04-xxxxxxxxxxx

```

If you want to generate a apidoc use:

```shell
 generate-collection
```

With this parameters :

* --collection : *REQUIRED* collection id. es. xxxxxxxx-28d8-4844-be04-xxxxxxxxxxx 
* --path : *REQUIRED* path where files will be stored. es. /Users/alessandro/Site/personal/apidoc-gen
* --name : *REQUIRED* name of the file exported. es. mycollection
* --postman-only : *REQUIRED* if you want to generate only postman api. es. false/true

#Install

If you want to install the script in another project use this command :

```shell
npm install git+ssh://git@github.com:acando14/apidoc.git
```

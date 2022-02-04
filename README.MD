## How to use command

First operation, the POSTMAN TOKEN must be exported =>

`
    export POSTMAN_APIKEY='PMAK-XXX';
`

## Output folder

All the generated files will be stored in `apidoc` folder.

To view all collections inside a worksapce you can yse this command :
```shell
list-collections xxxxxxxx-c97b-4c10-8b6f-xxxxxxxxxxx
```
and the output will be :

```text
    * MyCollection1 => xxxxxxxx-a914-4e99-bd55-xxxxxxxxxxx
    * MyCollection2 => xxxxxxxx-e125-40bb-afab-xxxxxxxxxxx
    * MyCollection3 => xxxxxxxx-28d8-4844-be04-xxxxxxxxxxx

```

If you want to generate a apidoc in both formats (openapi / postman) use:

```shell
 generate-collection xxxxxxxx-28d8-4844-be04-xxxxxxxxxxx
```

If you want to generate only the postman-collection use this command :

```shell
 generate-collection xxxxxxxx-28d8-4844-be04-xxxxxxxxxxx false
```

#Install

If you want to install the script in another project use this command :

```shell
npm install git+ssh://git@github.com:acando14/apidoc.git
```

## Commands
#### Find Bootstrap template

[Bootstrap Template](https://startbootstrap.com/template-categories/all/)

- Choose a template
- Download a template
- Unzip file

Open terminal and navigate to website directory.

#### Open Directory Contents (visual studio code)
```
code .
```

#### Install Dependencies
```
npm install
```

#### Audit and Fix Warnings
```
npm audit fix
```

#### Run Site on Localhost
```
gulp dev
```
- Site opens on localhost

#### Add Site to IPFS
```
cd .. 
ipfs add -r my-homepage
```

#### Publish Website to IPNS
```
ipfs name publish <hash of directory>
```

#### View Site on IPFS Gateway

```
https://gateway.ipfs.io/ipfs/<html-file-hash>

(https://gateway.ipfs.io/ipfs/QmS4eu7AwkFdcRBKVR6QkATnn9wbf3pmNQbQadGEZoGnmQ/)
```
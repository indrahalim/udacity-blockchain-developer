## Commands
#### Make Website Directory

```
mkdir my-website
```

#### Change into Directory

```
cd my-website
```

#### Create HTML File

```
touch my-website.html
```
#### ** Open Directory in Editor (visual studio code)
```
code .
```

#### Paste HTML into File
```
<html>
<header></header>
<title>My Website</title>
</header>

<body>
   Hello world
</body>

</html>
```

#### Add Website to IPFS

```
ipfs add my-website.html
```

#### Lookup 'name' in help menu

```
ipfs name --help
```

#### Publish Website to IPNS
```
ipfs name publish <name of html>
```

#### View Website in IPFS Gateway

```
https://gateway.ipfs.io/ipfs/<html-file-hash>

(https://gateway.ipfs.io/ipfs/QmS4eu7AwkFdcRBKVR6QkATnn9wbf3pmNQbQadGEZoGnmQ)
```
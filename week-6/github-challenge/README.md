# List GitHub user repositories

GitHub is our social network, and why not use its API along with your new knowledge in asynchronous programming, form validation and APIS consumption to build something new? Your goal is to create an application that lists a GitHub user's repositories!

## Final Result

![](src/assets/githublist.gif)

## Requirements

You will need Nodejs (LTS or Current) installed on your machine.

On the first run, run the command:

```bash
$ npm install
```

Then, to start developing

```bash
$ npm start
```

## Topics

With this challenge, you will learn:

- Promises
- Forms in React
- Axios
- Fetch API
- State

### Tasks

- Read the text of an `input` to get the name of the user to have the repositories listed as soon as the form is submitted
- Pre-validate the content of the input according to these rules:
     - Only alphanumeric characters or a single hyphen
     - Cannot start or end with a hyphen
     - Maximum of 39 characters
- Make a request to the GitHub endpoint when pressing `enter` in the input only if the username is valid
- If the user does not exist (404) display user not found validation error
- If the user has no repository, display an "Empty State" of "The user has no repository"
- If the request is successful and the user has 1 or more repositories, list them.
     - At least basic information about the repository must be displayed (name, link and number of stars)

### Example

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/vue-3/tToalvQ.gif)

### Attention

The input must contain a `data-test` attribute with the value `entrada`;
The "404" container must contain a `data-test` attribute with the value `nao-encontrado`;
The "Empty State" container must contain a `data-test` attribute with the value `sem-repositorios`;
Each repository container must contain a `data-test` attribute with the value `repositorio`;

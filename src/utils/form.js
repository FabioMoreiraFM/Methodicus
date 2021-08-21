const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const REGEX_WHITESPACE = / /g

export const validateEmail = (email) => {
    return REGEX_EMAIL.test(email)
}

export const removeWhiteSpaces = (completeName) => {
    let names = completeName.split(' ')

    names = names
        .map(name => name.replace(REGEX_WHITESPACE, ''))
        .filter(name => name !== '')

    return names.join(' ')
}
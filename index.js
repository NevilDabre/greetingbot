module.exports = function greetingbot(string){
    return string ? 'Hello '+ string.replace(/\s/g, ""): 'Hello good looking!';
}
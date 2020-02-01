//----------variables
const Discord = require('discord.js');
const prefix = '?';
const client = new Discord.Client();
const cmds = require('./cmds.json');
const emojis = require('./emojis.json');
let response;
const token = process.env.token;

client.once('ready', () => {
  console.log('Ready!');
})


client.on('message', message => {
  response = "";
  if (message.content.startsWith(`${prefix}`)) {
    emojify(message.content)
  } else if (message.content.startsWith('^')) {
    execute(message.content);
  } else {
    reply(message.content)
  }
  if (response != "") message.channel.send(response);
})


client.login(token);

//----------functions

function emojify(message) {
  for (i = 1; i < message.length; i++) {
    switch (message[i]) {
      case 'Α': case 'α': case 'A': case 'a': response = response + emojis["Α"];
        break;
      case 'Β': case 'β': case 'B': case 'b': response = response + emojis["Β"];
        break;
      case 'Γ': case 'γ': response = response + emojis["Γ"];
        break;
      case 'Δ': case 'δ': response = response + emojis["Δ"];
        break;
      case 'Ε': case 'ε': case 'E': case 'e': response = response + emojis["Ε"];
        break;
      case 'Ζ': case 'ζ': case 'Z': case 'z': response = response + emojis["Ζ"];
        break;
      case 'Η': case 'η': case 'H': case 'h': response = response + emojis["Η"];
        break;
      case 'Θ': case 'θ': response = response + emojis["Θ"];
        break;
      case 'Ι': case 'ι': case 'I': case 'i': response = response + emojis["Ι"];
        break;
      case 'Κ': case 'κ': case 'K': case 'k': response = response + emojis["Κ"];
        break;
      case 'Λ': case 'λ': response = response + emojis["Λ"];
        break;
      case 'Μ': case 'μ': case 'M': case 'm': response = response + emojis["Μ"];
        break;
      case 'Ν': case 'ν': case 'N': case 'n': response = response + emojis["Ν"];
        break;
      case 'Ξ': case 'ξ': response = response + emojis["Ξ"];
        break;
      case 'Ο': case 'ο': case 'O': case 'o': response = response + emojis["Ο"];
        break;
      case 'Π': case 'π': response = response + emojis["Π"];
        break;
      case 'Ρ': case 'ρ': case 'P': case 'p': response = response + emojis["Ρ"];
        break;
      case 'Σ': case 'σ': case 'ς': response = response + emojis["Σ"];
        break;
      case 'Τ': case 'τ': case 'T': case 't': response = response + emojis["Τ"];
        break;
      case 'Υ': case 'υ': case 'Y': case 'y': response = response + emojis["Υ"];
        break;
      case 'Φ': case 'φ': response = response + emojis["Φ"];
        break;
      case 'Χ': case 'χ': case 'X': case 'x': response = response + emojis["Χ"];
        break;
      case 'Ψ': case 'ψ': response = response + emojis["Ψ"];
        break;
      case 'Ω': case 'ω': response = response + emojis["Ω"];
        break;
      case 'R': case 'r': response = response + emojis["R"];
        break;
      case 'S': case 's': response = response + emojis["S"];
        break;
      case 'Q': case 'q': response = response + emojis["Q"];
        break;
      case 'W': case 'w': response = response + emojis["W"];
        break;
      case 'C': case 'c': response = response + emojis["C"];
        break;
      case 'V': case 'v': response = response + emojis["V"];
        break;
      case 'L': case 'l': response = response + emojis["L"];
        break;
      case 'U': case 'u': response = response + emojis["U"];
        break;
      case 'D': case 'd': response = response + emojis["D"];
        break;
      case 'J': case 'j': response = response + emojis["J"];
        break;
      case 'G': case 'g': response = response + emojis["G"];
        break;
      case 'F': case 'f': response = response + emojis["F"];
        break;
      default: response = response + "\t\t";
        break;
    }
  }
}

function reply(message) {
  var count = 0;
  for (let cmd in cmds) {
    for (let i = 1; i < cmds[cmd].length; i++) {
      if (message.toLowerCase().includes(cmds[cmd][i])) {
        count++;
      }
    }
    if (count == (cmds[cmd].length - 1)) {
      response = cmds[cmd][0];
      return;
    }
  }
}
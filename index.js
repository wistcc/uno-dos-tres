const fs = require('fs')
const path = require('path')
const SoxCommand = require('sox-audio');

const commands = {
  1: SoxCommand()
      .input('./assets/1.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      // short fade in was needed to remove void between files when concat
      .addEffect('fade', ['0.05']),
  2: SoxCommand()
      .input('./assets/2.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  3:  SoxCommand()
      .input('./assets/3.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  4:  SoxCommand()
      .input('./assets/4.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  5: SoxCommand()
      .input('./assets/5.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  6: SoxCommand()
      .input('./assets/6.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  7: SoxCommand()
      .input('./assets/7.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  8: SoxCommand()
      .input('./assets/8.mp3')
      .output('-p')
      .trim(0.3, 0.8)
      .addEffect('fade', ['0.05']),
  9: SoxCommand()
      .input('./assets/9.mp3')
      .output('-p')
      .trim(0.2, 0.9)
      .addEffect('fade', ['0.05']),
  10: SoxCommand()
      .input('./assets/10.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  11: SoxCommand()
      .input('./assets/11.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  12: SoxCommand()
      .input('./assets/12.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  13: SoxCommand()
      .input('./assets/13.mp3')
      .output('-p')
      .trim(0.3, 0.9)
      .addEffect('fade', ['0.05']),
  14: SoxCommand()
      .input('./assets/14.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  15: SoxCommand()
        .input('./assets/15.mp3')
        .output('-p')
        .trim(0.1, 0.9)
        .addEffect('fade', ['0.05']),
  16: SoxCommand()
      .input('./assets/16.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  17: SoxCommand()
      .input('./assets/17.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  18: SoxCommand()
      .input('./assets/18.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  19: SoxCommand()
      .input('./assets/19.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  20: SoxCommand()
      .input('./assets/20.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  30: SoxCommand()
        .input('./assets/30.mp3')
        .output('-p')
        .trim(0.1, 0.7)
        .addEffect('fade', ['0.05']),
  40: SoxCommand()
        .input('./assets/40.mp3')
        .output('-p')
        .trim(0.1, 0.7)
        .addEffect('fade', ['0.05']),
  50: SoxCommand()
      .input('./assets/50.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  60: SoxCommand()
      .input('./assets/60.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  70: SoxCommand()
      .input('./assets/70.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  80: SoxCommand()
      .input('./assets/80.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  90: SoxCommand()
        .input('./assets/90.mp3')
        .output('-p')
        .trim(0.1, 0.8)
        .addEffect('fade', ['0.05']),
  100: SoxCommand()
      .input('./assets/100.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  '100*': SoxCommand()
      .input('./assets/100*.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  500: SoxCommand()
      .input('./assets/500.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  700: SoxCommand()
      .input('./assets/700.mp3')
      .output('-p')
      .trim(0.1, 0.9)
      .addEffect('fade', ['0.05']),
  900: SoxCommand()
        .input('./assets/900.mp3')
        .output('-p')
        .trim(0, 0.85)
        .addEffect('fade', ['0.05']),
  1000: SoxCommand()
          .input('./assets/1000.mp3')
          .output('-p')
          .trim(0.1, 0.7)
          .addEffect('fade', ['0.05']),
  'y': SoxCommand()
        .input('./assets/y.mp3')
        .output('-p')
        .trim(0.3, 06)
        .addEffect('fade', ['0.05'])
}

const separateNumberIntoUnits = (number) => {
  var digits = number.toString().split('');
  const result = []

  for (let i =0; i < digits.length; i++) {
    let digit = digits[i]
    let exponential = digits.length - i - 1
    
    // skipping zero since it won't be pronounced
    if (digit === '0') continue

    // if it is on the ten thousands we need the 2 digits to be pronounced
    if (exponential >= 4) {
      i++
      exponential -= 1
      digit += digits[i]
    }
    
    if (exponential > 1 || (exponential === 1 && digit > 1)) {
      result.push(digit * Math.pow(10, exponential))
    }
    // if it is between 10 and 19  we need the 2 digits to be pronounced
    else if (exponential === 1 && digit === '1') {
      result.push(parseInt(digit + digits[i+1]))
      break
    } else {
      result.push(parseInt(digit))
    }
  }
  
  return result
}

const myArgs = process.argv.slice(2)
const lowerBand = parseInt(myArgs[0]) || 1
const upperBand = parseInt(myArgs[1]) || 100
const bulkSize = 100
const outputFilesCommands = []
let allCommands = []
let finalCommands = []
const outputDirectory = './output'

// cleaning output directory
fs.readdir(outputDirectory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(outputDirectory, file), err => {
      if (err) throw err;
    });
  }
});

const processCommands = (i) => {
  let finalCommand = SoxCommand()
  allCommands.forEach(command => {
    finalCommand = finalCommand.inputSubCommand(command)
  })

  finalCommands.push({
    name: `${outputDirectory}/output${i}.mp3`,
    command: finalCommand
  })
}

for (let i=lowerBand; i <= upperBand; i++) {
  const numbersToSay = separateNumberIntoUnits(i)
  const currentLength = numbersToSay.length
  
  numbersToSay.forEach((number, index) => {
    // The number has only one  digit
    // or this is not the last digit
    // or this is the last digit and it is not zero
    if (currentLength === 1 || 
      index < (currentLength - 1) ||
      (index === (currentLength - 1) && number !== 0)) {

      // adding the conjunction when needed
      if (numbersToSay.length > 1 && numbersToSay[index-1] < 100 && index === (currentLength - 1) && number < 10) {
        allCommands.push(commands['y'])
      }

      // choosing 'ciento' instead of 'cien'
      if (number === 100 && index !== (currentLength - 1)) {
        number = '100*'
      }
      // combining the digit with the 'ciento' audio
      else  if (number === 200 ||
        number === 300 ||
        number === 400 ||
        number === 600 ||
        number === 800) {
        const currentNumber = parseInt(number.toString()[0])
        allCommands.push(commands[currentNumber])
        number = '100*'
      }
      // making sure we choose the predefined audio for these specific numbers 2-9
      else if (number >= 2000 && number < 10000) {
        const currentNumber = parseInt(number.toString()[0])
        allCommands.push(commands[currentNumber])
        number = 1000
      }
      // making sure we choose the predefined audio for these specific numbers 10-19, 20, 30...
      else if (number >= 10000 && number <= 20000 ||
          number === 30000 ||
          number === 40000 ||
          number === 50000 ||
          number === 60000 ||
          number === 70000 ||
          number === 80000 ||
          number === 90000) {
        const currentNumber = parseInt(number.toString()[0] + number.toString()[1])
        allCommands.push(commands[currentNumber])
        number = 1000
      }
      // if it is on the ten thousands we need to separate the 2 digits to be pronounced
      else if (number >= 21000 && number <= 99000) {
        let currentNumber = parseInt(number.toString()[0]) * 10
        allCommands.push(commands[currentNumber])

        allCommands.push(commands['y'])

        currentNumber = parseInt(number.toString()[1])
        allCommands.push(commands[currentNumber])
        number = 1000
      }
      // just counting until 100,000
      // it might work for greater numbers but not guaranteed
      else if (number === 100000) {
        let currentNumber = 100
        allCommands.push(commands[currentNumber])
        number = 1000
      }

      allCommands.push(commands[number])
    }
  });

  // dividing output in chunks
  if (i % bulkSize === 0) {
    console.log(`Concatenating sequence after ${i}`)
    processCommands(i)
    allCommands = []
  }
}

// if we have some leftover commands to concat
if (allCommands.length) {
  console.log('Concatenating final sequence')
  processCommands('-final-chunk')
}

console.log('Executing commands...')

const executeCommand = (index) => {
  // this loops helps to execute up to 2 final commands at a time
  // making the whole process 2 times faster
  for (let i = 0; i < 2; i++) {
    const currentIndex = index + i
    lastIndex = currentIndex
    if (currentIndex >= finalCommands.length) break;
    
    finalCommands[currentIndex].command.on('end', () => {
      if (!outputFilesCommands.find(command => command.name === finalCommands[currentIndex].name)) {
        // creating one final list of commands with all the chunks
        outputFilesCommands.push({
          name: finalCommands[currentIndex].name,
          command: SoxCommand()
            .input(finalCommands[currentIndex].name)
            .output('-p')
        })
      }

      console.log(`Command ${index} executed`)
      index++

      fs.readdir(outputDirectory, (err, files) => {
        if ((files.length - 1) === lastIndex) {
          // executing next command after the previous is done
          executeCommand(lastIndex + 1)
        }
      });
    })

    console.log(`Executing command ${currentIndex}...`)
    finalCommands[currentIndex].command
      .output(finalCommands[currentIndex].name)
      .concat()
      .run()
  }
}

let index = 0
let lastIndex = finalCommands.length
executeCommand(index)

const quantity = upperBand - lowerBand + 1
const defaultIntervalTime = 30000
const possibleIntervalTime = 100 * quantity
const intervalTime = possibleIntervalTime < defaultIntervalTime ? possibleIntervalTime : defaultIntervalTime
const interval = setInterval(() => {
  console.log('************** Final check **************', outputFilesCommands.length, Math.ceil(quantity / bulkSize))
  if (outputFilesCommands.length === Math.ceil(quantity / bulkSize)) {
    clearInterval(interval)
    console.log('-------- Executing final command --------')
    let finalCommand = SoxCommand()
    outputFilesCommands.forEach(command => {
      finalCommand = finalCommand.inputSubCommand(command.command).concat()
    })
    
    finalCommand
      .output('output.mp3')
      .concat()
      .run()
    return
  }
}, intervalTime)

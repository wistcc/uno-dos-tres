const fs = require('fs')
const path = require('path')
const SoxCommand = require('sox-audio');

const commands = {
  1: SoxCommand()
      .input('./assets/1.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  2: SoxCommand()
      .input('./assets/2.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  3:  SoxCommand()
      .input('./assets/3.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  4:  SoxCommand()
      .input('./assets/4.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  5: SoxCommand()
      .input('./assets/5.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  6: SoxCommand()
      .input('./assets/6.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  7: SoxCommand()
      .input('./assets/7.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  8: SoxCommand()
      .input('./assets/8.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  9: SoxCommand()
      .input('./assets/9.mp3')
      .output('-p')
      .trim(0.1, 0.5),
  10: SoxCommand()
      .input('./assets/10.mp3')
      .output('-p'),
  11: SoxCommand()
      .input('-v 0.8 ./assets/11.mp3')
      .output('-p'),
  12: SoxCommand()
      .input('./assets/12.mp3')
      .output('-p'),
  13: SoxCommand()
      .input('./assets/13.mp3')
      .output('-p'),
  14: SoxCommand()
      .input('-v 0.8 ./assets/14.mp3')
      .output('-p'),
  15: SoxCommand()
      .input('./assets/15.mp3')
      .output('-p'),
  16: SoxCommand()
      .input('-v 0.8 ./assets/16.mp3')
      .output('-p'),
  17: SoxCommand()
      .input('-v 0.8 ./assets/17.mp3')
      .output('-p'),
  18: SoxCommand()
      .input('-v 0.8 ./assets/18.mp3')
      .output('-p'),
  19: SoxCommand()
      .input('-v 0.8 ./assets/19.mp3')
      .output('-p'),
  20: SoxCommand()
      .input('./assets/20.mp3')
      .output('-p'),
  '20-': SoxCommand()
      .input('-v 0.7 ./assets/20-.mp3')
      .output('-p'),
  30: SoxCommand()
      .input('./assets/30.mp3')
      .output('-p'),
  '30-': SoxCommand()
      .input('-v 1.1 ./assets/30-.mp3')
      .output('-p'),
  40: SoxCommand()
      .input('./assets/40.mp3')
      .output('-p'),
  '40-': SoxCommand()
      .input('-v 1.1 ./assets/40-.mp3')
      .output('-p'),
  50: SoxCommand()
      .input('./assets/50.mp3')
      .output('-p'),
  '50-': SoxCommand()
      .input('-v 0.7 ./assets/50-.mp3')
      .output('-p')
      .trim(0, 0.7),
  60: SoxCommand()
      .input('./assets/60.mp3')
      .output('-p'),
  '60-': SoxCommand()
      .input('-v 0.6 ./assets/60-.mp3')
      .output('-p')
      .trim(0, 0.7),
  70: SoxCommand()
      .input('./assets/70.mp3')
      .output('-p'),
  '70-': SoxCommand()
      .input('-v 0.8 ./assets/70-.mp3')
      .output('-p'),
  80: SoxCommand()
      .input('./assets/80.mp3')
      .output('-p'),
  '80-': SoxCommand()
      .input('-v 0.7 ./assets/80-.mp3')
      .output('-p')
      .trim(0, 0.65),
  90: SoxCommand()
      .input('./assets/90.mp3')
      .output('-p'),
  '90-': SoxCommand()
      .input('-v 0.7 ./assets/90-.mp3')
      .output('-p')
      .trim(0, 0.6),
  100: SoxCommand()
      .input('./assets/100.mp3')
      .output('-p'),
  '100-': SoxCommand()
      .input('./assets/100-.mp3')
      .output('-p')
      .trim(0, 0.6),
  200: SoxCommand()
      .input('-v 0.9 ./assets/200.mp3')
      .output('-p')
      .trim(0, 0.75),
  300: SoxCommand()
      .input('-v 0.8 ./assets/300.mp3')
      .output('-p')
      .trim(0, 0.75),
  400: SoxCommand()
      .input('-v 0.6 ./assets/400.mp3')
      .output('-p')
      .trim(0, 0.75),
  500: SoxCommand()
      .input('-v 0.8 ./assets/500.mp3')
      .output('-p')
      .trim(0, 0.75),
  600: SoxCommand()
      .input('-v 0.8 ./assets/600.mp3')
      .output('-p')
      .trim(0, 0.75),
  700: SoxCommand()
      .input('-v 0.6 ./assets/700.mp3')
      .output('-p')
      .trim(0, 0.85),
  800: SoxCommand()
      .input('-v 0.6 ./assets/800.mp3')
      .output('-p')
      .trim(0, 0.85),
  900: SoxCommand()
      .input('-v 0.6 ./assets/900.mp3')
      .output('-p')
      .trim(0, 0.85),
  1000: SoxCommand()
      .input('-v 1.1 ./assets/1000.mp3')
      .output('-p')
      .trim(0.15, 0.3),
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
const quantity = upperBand - lowerBand + 1
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

      if (index !== (currentLength - 1) && [20, 30, 40, 50, 60, 70, 80, 90].includes(number)) {
        number = `${number}-`
      }
      // choosing 'ciento' instead of 'cien'
      else if (number === 100 && index !== (currentLength - 1)) {
        number = '100-'
      }
      // making sure we choose the predefined audio for these specific numbers 2-9
      else if (number >= 2000 && number < 10000) {
        const currentNumber = parseInt(number.toString()[0])
        allCommands.push(commands[currentNumber])
        number = 1000
      }
      // making sure we choose the predefined audio for these specific numbers 10-19, 20, 30...
      else if (number >= 10000 && number <= 20000 ||
        [30000, 40000, 50000, 60000, 70000, 80000, 90000].includes(number)) {
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
  if (i % bulkSize === 0 && quantity > bulkSize) {
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
            .input(`-v 6 ${finalCommands[currentIndex].name}`)
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

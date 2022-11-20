const compose = (...fns: Function[]) => (value: any) =>
    fns.reduceRight((prevFunc, currFunc) => currFunc(prevFunc), value);

const excludeStartAndEndWhiteSpace = (str: string) => str.replace(/(^\s*)|(\s*$)/gi, "");
const reduceExtraWhiteSpace = (str: string) => str.replace(/[ ]{2,}/gi, " ");
const removeExtraSpaceAfterNewLine = (str: string) => str.replace(/\n /, "\n");
const replaceDotWithOneSpace = (str: string) => str.replace(".", " ");
const arrayLength = (str: string) => str.split(" ").length;

let wordCounter = compose(arrayLength, removeExtraSpaceAfterNewLine, reduceExtraWhiteSpace, replaceDotWithOneSpace, excludeStartAndEndWhiteSpace);

const input = `Ukrainian efforts to stabilize some of the country’s battered electricity supply and make a dent in the seemingly endless task of demining swaths of the country offered a glimpse into the Herculean task that lies ahead off the battlefield.
For the first time since Moscow this past week carried out its largest assault on Ukraine’s energy infrastructure, the national energy utility said on Saturday that it was again able to use planned, coordinated blackouts to keep the national grid stabilized rather than resorting to emergency power shutdowns.
The first traces of power were also restored to the recently reclaimed southern city of Kherson, which was left without heat, running water and electricity by Russian troops, as they blew up and tore down critical infrastructure before retreating to territory east of the Dnipro River.`

console.log(`Words Count: ${wordCounter(input)}`)
const jokesButton = document.getElementById('new-joke')
const jokesArea = document.getElementById('jokes-area')

jokesButton.addEventListener('click', () => {
    const target = generateTarget()
    const randJoke = yoMamaJokes[target]
    jokesArea.innerHTML = 'Yo mama ' + randJoke
})

const generateTarget = () => Math.floor(Math.random() * yoMamaJokes.length)

const yoMamaJokes = ["so fat, not even Dora can explore her.","so fat, she was overthrown by a small militia group, and now she's known as the Republic of Yo Mama.",
"so fat, when she wears high heels, she strikes oil.","so fat, I swerved to miss her in my car and ran out of gas.",
"so fat, she stepped on a scale and it said: \"To be continued.\"","so fat, if she buys a fur coat, a whole species will become extinct.",
"so fat, when she goes camping, the bears hide their food.","so fat, it took me two buses and a train to get to her good side.",
"so fat, when she skips a meal, the stock market drops.","so fat, when she fell I didn't laugh, but the sidewalk cracked up.",
"so fat, her car has stretch marks.","so fat, when she sits around the house, she SITS AROUND the house.",
"so fat, when she walked past the TV, I missed three episodes.","so fat, her job title is Spoon and Fork Operator.","so fat that when she hauls ass, she has to make two trips.",
"so fat, she left in high heels and came back in flip flops.","so fat, when she talks to herself, it's a long-distance call.",
"so big, her belt size is \"equator.\"","so fat, when she went to KFC and the cashier asked what size bucket she wanted, she said, \"The one on the roof!\"",
"so fat, she gets group insurance.","so stupid, when they said, \"Order in the court,\" she asked for fries and a shake.",
"so stupid, she put lipstick on her forehead to make up her mind.","so stupid, when they said it was chilly outside, she grabbed a bowl.","so dumb, it takes her an hour to cook minute rice.",
"so dumb, she thought Twitter was social media for birds.","so stupid, she stared at a cup of orange juice for 12 hours because it said \"concentrate.\"",
"so fat, she brought a spoon to the Super Bowl.","so fat, if she was a Star Wars character, her name would be Admiral Snackbar.",
"so fat, her blood type is Ragu.","so fat, she can't even jump to a conclusion.","so stupid, she went to the eye doctor to get an iPhone.",
"is so dumb, she cooked her own complimentary breakfast.","so stupid, she tried to eat Eminem","so stupid, when thieves broke into her house and stole the TV, she chased after them shouting, \"Wait, you forgot the remote!\"",
"so stupid, when I told her that she lost her mind, she went looking for it","so dumb, she thought KFC was UFC for chickens.","so dumb, she thought Dunkin' Donuts was a basketball team.",
"so stupid, she got hit by a parked car.","so dumb, she sold her car to get gasoline money.","so stupid, she thought a quarterback was a refund.",
"so ugly, her portraits hang themselves.","so ugly, she made a blind kid cry.","so ugly, she threw a boomerang and it refused to come back.",
"so stupid, she put airbags on her computer in case it crashed.","so stupid, it takes her two hours to watch 60 Minutes.","so stupid, when I said, \"Drinks on the house,\" she got a ladder.",
"so stupid, she got locked in the grocery store and starved to death.","so stupid, she took a ruler to bed to see how long she slept.",
"so stupid, she went to the dentist to get a Bluetooth.","so stupid, she climbed over a glass wall to see what was on the other side.",
"so depressing, blues singers come to visit her when they've got writer's block.","cooking so nasty, the house flies got together to fix the hole in the window screen.",
"so poor, the ducks throw bread at her.","so ugly, she looked out the window and was arrested for mooning.","so ugly, when she was born the doctor slapped your grandma.",
"so ugly, she could make an onion cry.","so ugly, when she looks in the mirror, the reflection ducks.","so ugly, she walked into a haunted house and walked back out with a job application.",
"so ugly, her birth certificate is an apology letter.","so ugly, when she was little, she had to trick-or-treat by phone.","so confusing, even Scooby Doo couldn't solve that mystery.","so mean, they don't give her happy meals at McDonald's.",
"so lazy, she has a stay-at-home job and still is late to work.","armpits are so hairy, it looks like she's got Buckwheat in a headlock.",
"so poor, she chases the garbage truck with a grocery list.","so classless, she's a Marxist utopia.","so old, she walked into an antique store, and they didn't let her leave.",
"teeth are so yellow, when she smiles at traffic, it slows down.","so poor, she can't even afford to pay attention.","so short, you can see her feet on her driver's license.",
"is so mean, even Hello Kitty said goodbye.","house is so dirty, she has to wipe her feet before she goes outside.","so old, she was a waitress at the Last Supper.",
"so lazy, she stuck her nose out the window and let the wind blow it.","glasses are so thick, when she looks on a map, she can see people waving."," so old, she walked out of a museum and the alarm went off.",
"so short, she has to slam dunk her bus fare.","so poor, Nigerian princes wire her money.","so nasty, she went swimming and made the Dead Sea.",
"so old, she knew Burger King when he was a prince.","so strict, she enforced a curfew for the entire neighborhood.","teeth so yellow, I can't believe it's not butter.",
"so nasty, they used to call them \"jumpolines\" 'til yo mama bounced on one.","so scary, the government moved Halloween to her birthday."," so short, she went to see Santa and he told her to get back to work.",
"so old, her Social Security number is one."];


#!/bin/sh

# List of cool quotes: 32 of them. The last one is especially good.
new_quote=(
"Age is an issue of mind over matter. If you don't mind, it doesn't matter. -Mark Twain"
"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young. -Henry Ford"
"Wrinkles should merely indicate where smiles have been. -Mark Twain"
"True terror is to wake up one morning and discover that your high school class is running the country. -Kurt Vonnegut"
"A diplomat is a man who always remembers a woman's birthday but never remembers her age. -Robert Frost"
"As I grow older, I pay less attention to what men say. I just watch what they do. -Andrew Carnegie"
"How incessant and great are the ills with which a prolonged old age is replete.; -C. S. Lewis"
"Old age, believe me, is a good and pleasant thing. It is true you are gently shouldered off the stage, but then you are given such a comfortable front stall as spectator. -Confucius"
"Old age has deformities enough of its own. It should never add to them the deformity of vice. -Eleanor Roosevelt"
"Nobody grows old merely by living a number of years. We grow old by deserting our ideals. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul. -Samuel Ullman"
"An archaeologist is the best husband a woman can have. The older she gets the more interested he is in her. -Agatha Christie"
"All diseases run into one, old age. -Ralph Waldo Emerson"
"Bashfulness is an ornament to youth, but a reproach to old age. -Aristotle"
"Like everyone else who makes the mistake of getting older, I begin each day with coffee and obituaries. -Bill Cosby"
"Age appears to be best in four things old wood best to burn, old wine to drink, old friends to trust, and old authors to read. -Francis Bacon"
"None are so old as those who have outlived enthusiasm. -Henry David Thoreau"
"Every man over forty is a scoundrel. -George Bernard Shaw"
"Forty is the old age of youth fifty the youth of old age. -Victor Hugo"
"You can't help getting older, but you don't have to get old. -George Burns"
"Alas, after a certain age every man is responsible for his face. -Albert Camus"
"Youth is when you're allowed to stay up late on New Year's Eve. Middle age is when you're forced to. -Bill Vaughan"
"Old age is like everything else. To make a success of it, you've got to start young. -Theodore Roosevelt"
"A comfortable old age is the reward of a well-spent youth. Instead of its bringing sad and melancholy prospects of decay, it would give us hopes of eternal youth in a better world. -Maurice Chevalier"
"A man growing old becomes a child again. -Sophocles"
"I will never be an old man. To me, old age is always 15 years older than I am. -Francis Bacon"
"Age considers youth ventures. -Rabindranath Tagore"
"Inflation is when you pay fifteen dollars for the ten-dollar haircut you used to get for five dollars when you had hair. -Sam Ewing"
"My notion of a wife at 40 is that a man should be able to change her, like a bank note, for two 20s. -Warren Beatty"
"As you age naturally, your family shows more and more on your face. If you deny that, you deny your heritage. -Frances Conroy"
"Old age is like a plane flying through a storm. Once you're aboard, there's nothing you can do. -Golda Meir"
"In youth the days are short and the years are long. In old age the years are short and day's long. -Pope Paul VI"
"The world changes very quickly. The Earth will continue to rotate whether you like it or not. -Yichen Zhu"
)
size=${#new_quote[@]}
index=$(($RANDOM % $size))

git pull origin master
#git pull heroku master

git add -A
git commit -m "${new_quote[$index]}"
git push
#git push heroku master # https://git.heroku.com/trademebooks.git
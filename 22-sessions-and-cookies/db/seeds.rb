# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Question.destroy_all
Answer.destroy_all

question = {"response_code":0,"results":[{"category":"Entertainment: Cartoon & Animations","type":"multiple","difficulty":"easy","question":"What was the name of the sea witch in the 1989 Disney film \"The Little Mermaid\"?","correct_answer":"Ursula","incorrect_answers":["Madam Mim","Maleficent","Lady Tremaine"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the first book of the Old Testament?","correct_answer":"Genesis","incorrect_answers":["Exodus","Leviticus","Numbers"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the largest organ of the human body?","correct_answer":"Skin","incorrect_answers":["Heart","large Intestine","Liver"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"Who is the lead singer of the band Coldplay?","correct_answer":"Chris Martin","incorrect_answers":["Chris Isaak","Chris Wallace","Chris Connelly"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"The element involved in making human blood red is which of the following?","correct_answer":"Iron","incorrect_answers":["Copper","Iridium","Cobalt"]},{"category":"Geography","type":"multiple","difficulty":"easy","question":"What is the capital of India?","correct_answer":"New Delhi","incorrect_answers":["Bejing","Montreal","Tithi"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What year was Super Mario Bros. released?","correct_answer":"1985","incorrect_answers":["1983","1987","1986"]},{"category":"Science: Gadgets","type":"multiple","difficulty":"easy","question":"When was the iPhone released?","correct_answer":"2007","incorrect_answers":["2005","2006","2004"]},{"category":"History","type":"multiple","difficulty":"easy","question":"These two countries held a commonwealth from the 16th to 18th century.","correct_answer":"Poland and Lithuania","incorrect_answers":["Hutu and Rwanda","North Korea and South Korea","Bangladesh and Bhutan"]}]}


question[:results].each do | result |
    question = Question.create({ content:result[:question] })
    question.correct_answer = Answer.create({ content:result[:correct_answer], question:question })
    question.save
    result[:incorrect_answers].each do | answer |
        answer2 = Answer.create({ content:answer, question:question })
    end
end
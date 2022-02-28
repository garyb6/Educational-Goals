package educationalgoals.educationalgoals.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ask")
    private String ask;

    @JsonIgnoreProperties(value= "question")
    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<Option> options;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    @JsonIgnoreProperties(value = "questions")
    private Quiz quiz;

    public Question(Quiz quiz, String ask) {
        this.quiz = quiz;
        this.ask = ask;
        this.options = new ArrayList<>();
    }

    public Question() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public String getAsk() {
        return ask;
    }

    public void setAsk(String ask) {
        this.ask = ask;
    }

    public List<Option> getOptions() {
        return options;
    }

    public void setOptions(List<Option> options) {
        this.options = options;
    }

    public void addOption(Option option){
        this.options.add(option);
    }

    public void removeOption(Option option){
        this.options.remove(option);
    }
}

//    @OneToOne(mappedBy = "question", fetch = FetchType.LAZY)
//    @JsonIgnoreProperties({"question"})
//    private Answer correctAnswer;

//    public List<Answer> getAnswers() {
//        return answers;
//    }
//
//    public void setAnswers(List<Answer> answers) {
//        this.answers = answers;
//    }
//
//    public Answer getCorrectAnswer() {
//        return correctAnswer;
//    }
//
//    public void setCorrectAnswer(Answer correctAnswer) {
//        this.correctAnswer = correctAnswer;
//    }

//    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)

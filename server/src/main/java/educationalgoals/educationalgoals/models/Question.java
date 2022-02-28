package educationalgoals.educationalgoals.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"question"})
    private List<Option> options;

    @OneToOne(mappedBy = "question", fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"question"})
    private Answer correctAnswer;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    @JsonIgnoreProperties({"questions"})
    private Quiz quiz;

    public Question(String ask, Answer correctAnswer, Quiz quiz) {
        this.ask = ask;
        this.options = new ArrayList<>();
        this.correctAnswer = correctAnswer;
        this.quiz = quiz;
    }

    public Question() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAsk() {
        return ask;
    }

    public void setAsk(String ask) {
        this.ask = ask;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public Answer getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(Answer correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public void addAnswer(Answer answer){
        this.answers.add(answer);
    }

    public void removeAnswer(Answer answer){
        this.answers.remove(answer);
    }
}

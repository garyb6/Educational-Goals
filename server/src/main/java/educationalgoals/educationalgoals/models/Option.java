package educationalgoals.educationalgoals.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "options")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "expression")
    private String expression;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    @JsonIgnoreProperties({"options"})
    private Question question;

    @Column(name = "correct")
    private Boolean correct;


    public Option(String expression, Question question) {
        this.expression = expression;
        this.question = question;
        this.correct = false;
    }

    public Option(String expression, Question question, Boolean correct) {
        this.expression = expression;
        this.question = question;
        this.correct = correct;
    }

    public Option(){};

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Boolean getCorrect() {
        return correct;
    }

    public void setCorrect(Boolean correct) {
        this.correct = correct;
    }
}


//    public boolean isCorrect() {
//        return correct;
//    }
//
//    public void setCorrect(boolean correct) {
//        this.correct = correct;
//    }
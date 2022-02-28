//package educationalgoals.educationalgoals.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "answers")
//public class Answer {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "phrase")
//    private String phrase;
//
//    @ManyToOne
//    @JoinColumn(name = "question_id", nullable = false)
//    @JsonIgnoreProperties({"answers"})
//    private Question question;
//
//    public Answer(String phrase, Question question) {
//        this.phrase = phrase;
//        this.question = question;
//    }
//
//    public Answer() {
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getPhrase() {
//        return phrase;
//    }
//
//    public void setPhrase(String phrase) {
//        this.phrase = phrase;
//    }
//
//    public Question getQuestion() {
//        return question;
//    }
//
//    public void setQuestion(Question question) {
//        this.question = question;
//    }
//}
//

//question list of answers
package com.uni.Notes.model;

import jakarta.persistence.*;
import java.io.Serializable;


@Entity
public class Subject implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;
    private String subname;
    private String credit;
    private String absence;
    private String examtime;
    private String grade;


    public Subject() {}

    public Subject(String subname, String instructor, String credit, String absence, String imageUrl, String subjtype, String examtime) {
        this.subname = subname;
        this.credit = credit;
        this.absence = absence;
        this.examtime = examtime;
        this.grade = grade;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getSubname() {
        return subname;
    }
    public void setSubname(String subname) {
        this.subname = subname;
    }

    public String getCredit() {
        return credit;
    }
    public void setCredit(String credit) {
        this.credit = credit;
    }

    public String getAbsence() {
        return absence;
    }
    public void setAbsence(String absence) {
        this.absence = absence;
    }

    public String getExamtime() {
        return examtime;
    }
    public void setExamtime(String examtime) {
        this.examtime = examtime;
    }

    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "Subject {" +
                "id=" + id +
                ", subname=" + subname + '\'' +
                ", credit=" + credit + '\'' +
                ", absence=" + absence + '\'' +
                ", examtime=" + examtime + '\'' +
                ", grade=" + grade + '\'' +
                '}';
    }

}

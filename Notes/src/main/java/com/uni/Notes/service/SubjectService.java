package com.uni.Notes.service;


import com.uni.Notes.exception.SubjectNotFoundException;
import com.uni.Notes.model.Subject;
import com.uni.Notes.repo.SubjectRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Transactional
public class SubjectService {
    private final SubjectRepo subjectRepo;

    @Autowired
    public SubjectService(SubjectRepo subjectRepo) {
        this.subjectRepo = subjectRepo;
    }

    public Subject addSubject(Subject subject) {
        return subjectRepo.save(subject);
    }

    public List<Subject> findAllSubjects() {
        return subjectRepo.findAll();
    }

    public Subject updateSubject(Subject subject) {
        return subjectRepo.save(subject);
    }

    public Subject findSubjectById(Long id) {
        return subjectRepo.findSubjectById(id)
                .orElseThrow(() -> new SubjectNotFoundException("Kurzus nem található " + id + " ID alapján."));
    }

    public void deleteSubject(Long id) {
        subjectRepo.deleteSubjectById(id);
    }
}

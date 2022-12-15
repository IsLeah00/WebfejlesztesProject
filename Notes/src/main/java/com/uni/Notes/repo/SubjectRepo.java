package com.uni.Notes.repo;

import com.uni.Notes.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface SubjectRepo extends JpaRepository<Subject, Long> {
    void deleteSubjectById(Long id);
    Optional<Subject> findSubjectById(Long id);
}

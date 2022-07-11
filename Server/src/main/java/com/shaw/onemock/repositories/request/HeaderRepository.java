package com.shaw.onemock.repositories.request;

import com.shaw.onemock.entities.requests.Header;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HeaderRepository extends JpaRepository<Header, Long> {
    Optional<Header> findByKeyAndValue(String key, String value);
}

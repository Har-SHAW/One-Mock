package com.shaw.onemock.repositories;

import com.shaw.onemock.models.requests.Header;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HeaderRepository extends JpaRepository<Header, Long> {
    Optional<Header> findByKeyAndValue(String key, String value);
}

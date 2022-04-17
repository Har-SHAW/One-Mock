package com.shaw.onemock.repositories;

import com.shaw.onemock.models.Header;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeaderRepository extends JpaRepository<Header, Long> {
}

package com.shaw.onemock.repositories.request;

import com.shaw.onemock.entities.requests.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {
    <T> List<T> findBy(Class<T> projection);
}

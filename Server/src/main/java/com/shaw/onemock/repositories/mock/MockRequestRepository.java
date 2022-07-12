package com.shaw.onemock.repositories.mock;

import com.shaw.onemock.entities.mock.MockRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MockRequestRepository extends JpaRepository<MockRequest, Long> {
    Optional<MockRequest> findByMethodAndPath(String method, String path);

    <T> List<T> findBy(Class<T> projection);

    Boolean existsByMethodAndPath(String method, String path);
}

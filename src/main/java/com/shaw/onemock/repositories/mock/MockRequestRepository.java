package com.shaw.onemock.repositories.mock;

import com.shaw.onemock.models.mock.MockRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MockRequestRepository extends JpaRepository<MockRequest, String> {
    Optional<MockRequest> findByMethodAndPath(String method, String path);

    Boolean existsByMethodAndPath(String method, String path);
}

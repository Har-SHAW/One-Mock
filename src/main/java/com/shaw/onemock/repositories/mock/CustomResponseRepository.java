package com.shaw.onemock.repositories.mock;

import com.shaw.onemock.models.mock.CustomResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomResponseRepository extends JpaRepository<CustomResponse, Long> {
}

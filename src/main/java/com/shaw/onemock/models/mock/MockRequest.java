package com.shaw.onemock.models.mock;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class MockRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mockId;
    @NonNull
    private String method;
    @NonNull
    private String path;
    @NonNull
    private String responseBody;
    @NonNull
    private Long duration;
    @NonNull
    private Boolean hasCustomResponse;
    @OneToMany(mappedBy = "mockRequest")
    private Set<CustomResponse> customResponses;
}

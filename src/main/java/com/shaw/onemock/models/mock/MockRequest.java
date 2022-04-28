package com.shaw.onemock.models.mock;

import com.shaw.onemock.dtos.mocks.MockRequestDto;
import lombok.*;

import javax.persistence.*;
import java.util.List;

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
    private List<CustomResponse> customResponses;

    public MockRequest(MockRequestDto mockRequestDto) {
        this.method = mockRequestDto.getMethod();
        this.path = mockRequestDto.getPath();
        this.duration = mockRequestDto.getDuration();
        this.responseBody = mockRequestDto.getResponseBody();
        this.hasCustomResponse = mockRequestDto.getHasCustomResponse();
    }
}
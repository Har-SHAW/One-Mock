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
    private Integer statusCode;
    @NonNull
    private Integer duration;
    @NonNull
    private String format;
    @NonNull
    private Boolean hasMultipleResponse;

    @OneToMany(mappedBy = "mockRequest")
    private List<CustomResponse> customResponses;

    public MockRequest(MockRequestDto mockRequestDto) {
        this.method = mockRequestDto.getMethod();
        this.path = mockRequestDto.getPath();
        this.duration = mockRequestDto.getDuration();
        this.responseBody = mockRequestDto.getResponseBody();
        this.hasMultipleResponse = mockRequestDto.getHasMultipleResponse();
        this.statusCode = mockRequestDto.getStatusCode();
        this.format = mockRequestDto.getFormat();
    }

    public void copyFrom(MockRequestDto mockRequestDto) {
        this.method = mockRequestDto.getMethod();
        this.path = mockRequestDto.getPath();
        this.duration = mockRequestDto.getDuration();
        this.responseBody = mockRequestDto.getResponseBody();
        this.hasMultipleResponse = mockRequestDto.getHasMultipleResponse();
        this.statusCode = mockRequestDto.getStatusCode();
        this.format = mockRequestDto.getFormat();
    }
}

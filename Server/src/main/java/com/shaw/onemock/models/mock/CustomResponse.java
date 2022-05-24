package com.shaw.onemock.models.mock;

import com.shaw.onemock.dtos.mocks.CustomResponseDto;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class CustomResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long customResponseId;
    @NonNull
    private String requestValue;
    @NonNull
    private Boolean isHeader;
    @NonNull
    private String responseBody;
    @NonNull
    private Integer statusCode;

    @ManyToOne
    @JoinColumn(name = "mock_id")
    private MockRequest mockRequest;

    public CustomResponse(CustomResponseDto customResponseDto) {
        this.requestValue = customResponseDto.getRequestValue();
        this.responseBody = customResponseDto.getResponseBody();
        this.isHeader = customResponseDto.getIsHeader();
        this.statusCode = customResponseDto.getStatusCode();
    }

    public void copyFrom(CustomResponseDto customResponseDto) {
        this.requestValue = customResponseDto.getRequestValue();
        this.responseBody = customResponseDto.getResponseBody();
        this.isHeader = customResponseDto.getIsHeader();
        this.statusCode = customResponseDto.getStatusCode();
    }
}

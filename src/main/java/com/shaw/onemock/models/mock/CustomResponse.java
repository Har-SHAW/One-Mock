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
    private String body;
    @NonNull
    private String responseBody;

    @ManyToOne
    @JoinColumn(name = "mock_id")
    private MockRequest mockRequest;

    public CustomResponse(CustomResponseDto customResponseDto) {
        this.body = customResponseDto.getBody();
        this.responseBody = customResponseDto.getResponseBody();
    }
}

package com.shaw.onemock.models.mock;

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
    @NonNull
    private MockRequest mockRequest;
}

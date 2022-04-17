package com.shaw.onemock.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor()
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long requestId;

    @NonNull
    private String body;

    @NonNull
    private String path;

    @NonNull
    private String method;

    @NonNull
    private String timeStamp;

    @OneToMany(mappedBy = "request")
    private List<Header> headers;
}

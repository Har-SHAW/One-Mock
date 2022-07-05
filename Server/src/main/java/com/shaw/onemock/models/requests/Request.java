package com.shaw.onemock.models.requests;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

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
    private String params;

    @NonNull
    private String timeStamp;

    @ManyToMany
    @JoinTable(
            name = "request_header",
            joinColumns = @JoinColumn(name = "request_id"),
            inverseJoinColumns = @JoinColumn(name = "header_id")
    )
    private Set<Header> headers;
}

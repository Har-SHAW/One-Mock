package com.shaw.onemock.models;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
public class Header {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long headerId;

    @NonNull
    private String key;

    @NonNull
    private String value;

    @ManyToOne
    @JoinColumn(name = "request_id")
    private Request request;
}

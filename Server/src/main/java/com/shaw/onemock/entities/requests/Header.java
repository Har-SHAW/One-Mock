package com.shaw.onemock.entities.requests;

import jakarta.persistence.*;
import lombok.*;

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
    @Column(name = "header_key")
    private String key;

    @NonNull
    @Column(name = "header_value")
    private String value;
}

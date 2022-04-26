package com.shaw.onemock.models.requests;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
}

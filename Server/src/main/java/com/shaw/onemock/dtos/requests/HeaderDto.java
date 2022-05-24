package com.shaw.onemock.dtos.requests;

import com.shaw.onemock.models.requests.Header;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HeaderDto {
    private String key;
    private String value;

    public HeaderDto(Header header) {
        this.key = header.getKey();
        this.value = header.getValue();
    }
}

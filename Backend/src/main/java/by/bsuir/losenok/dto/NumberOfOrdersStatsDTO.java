package by.bsuir.losenok.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.LocalDate;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class NumberOfOrdersStatsDTO {

    private LocalDate from;
    private LocalDate to;
    private Long numberOfOrders;

    public LocalDate getFrom() {
        return from;
    }

    public void setFrom(LocalDate from) {
        this.from = from;
    }

    public LocalDate getTo() {
        return to;
    }

    public void setTo(LocalDate to) {
        this.to = to;
    }

    public Long getNumberOfOrders() {
        return numberOfOrders;
    }

    public void setNumberOfOrders(Long numberOfOrders) {
        this.numberOfOrders = numberOfOrders;
    }
}

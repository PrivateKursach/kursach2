package by.bsuir.losenok.service.exception;

import java.util.HashMap;
import java.util.Map;

public class ServiceValidationException extends RuntimeException {

    private static final long serialVersionUID = 5416710224891889234L;

    private Map<Integer, String> messages = new HashMap<>();

    public ServiceValidationException() {
    }

    public ServiceValidationException(Throwable cause) {
        super(cause);
    }

    public ServiceValidationException(Integer code, String message) {
        messages.put(code, message);
    }

    public ServiceValidationException(Integer code, String message, Throwable cause) {
        super(cause);
        messages.put(code, message);
    }

    public Map<Integer, String> getMessages() {
        return messages;
    }

    public void setMessages(Map<Integer, String> messages) {
        this.messages = messages;
    }

    public void addMessage(Integer code, String message) {
        messages.put(code, message);
    }
}

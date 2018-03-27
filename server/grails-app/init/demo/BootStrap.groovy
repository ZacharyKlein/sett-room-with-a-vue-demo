package demo

import demo.*
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired

@Slf4j
class BootStrap {

    @Autowired
    BookService bookService

    @Autowired
    AuthorService authorService

    def init = { servletContext ->
        log.info "Populating database"
        Author ken = authorService.save "Ken Kousen"
        Author eric = authorService.save "Eric Helgeson"
        Author cris = authorService.save "Cristian Olaru"

        bookService.save "Making Java Groovy", 800, ken
        bookService.save "Gradle Recipes", 500, ken
        bookService.save "Practical Grails 3", 600, eric
        bookService.save "Grails 3 - Step by Step", 600, cris


    }
    def destroy = {
    }
}

============================
Programmer Competency Matrix
============================

.. meta::
    :description:
        Simple web application with offline support which will help you to
        track your progress on famous Programmer Competency Matrix
        (by Sijin Joseph), being published on Starling Software, Hacker News
        and other great sites
    :keywords:
        programmer competency, matrix, table, tracking, offline, application

Note that the knowledge for each level is cumulative;
being at level *n* implies that you also know everything from the levels lower than *n*.

.. table:: Computer Science

   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   |                              | 2\ :sup:`n` (level 0)        | n\ :sup:`2` (level 1)        | n (level 2)                  | log(n) (level 3)             | Comments                     |
   +==============================+==============================+==============================+==============================+==============================+==============================+
   | data structures              | Doesn't know the difference  | Able to explain and use      | Knows space and time         | Knowledge of advanced data   |                              |
   |                              | between Array and LinkedList | Arrays, LinkedLists,         | tradeoffs of the basic data  | structures like B-trees,     |                              |
   |                              |                              | Dictionaries etc in          | structures, Arrays vs        | binomial and fibonacci       |                              |
   |                              |                              | practical programming tasks  | LinkedLists, Able to explain | heaps, AVL/Red Black trees,  |                              |
   |                              |                              |                              | how hashtables can be        | Splay Trees, Skip Lists,     |                              |
   |                              |                              |                              | implemented and can handle   | tries etc.                   |                              |
   |                              |                              |                              | collisions, Priority queues  |                              |                              |
   |                              |                              |                              | and ways to implement them   |                              |                              |
   |                              |                              |                              | etc                          |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | algorithms                   | Unable to find the average   | Basic sorting, searching and | Tree, Graph, simple greedy   | Able to recognize and code   | Working with someone who has |
   |                              | of numbers in an array (It's | data structure traversal and | and divide and conquer       | dynamic programming          | a good topcoder ranking      |
   |                              | hard to believe but I've     | retrieval algorithms         | algorithms, is able to       | solutions, good knowledge of | would be an unbelievable     |
   |                              | interviewed such candidates) |                              | understand the relevance of  | graph algorithms, good       | piece of luck!               |
   |                              |                              |                              | the levels of this matrix.   | knowledge of numerical       |                              |
   |                              |                              |                              |                              | computation algorithms, able |                              |
   |                              |                              |                              |                              | to identify NP problems etc. |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | systems programming          | Doesn't know what a          | Basic understanding of       | Understands kernel mode vs.  | Understands the entire       |                              |
   |                              | compiler, linker or          | compilers, linker and        | user mode, multi-threading,  | programming stack, hardware  |                              |
   |                              | interpreter is               | interpreters. Understands    | synchronization primitives   | (CPU + Memory + Cache +      |                              |
   |                              |                              | what assembly code is and    | and how they're implemented, | Interrupts + microcode),     |                              |
   |                              |                              | how things work at the       | able to read assembly code.  | binary code, assembly,       |                              |
   |                              |                              | hardware level. Some         | Understands how networks     | static and dynamic linking,  |                              |
   |                              |                              | knowledge of virtual memory  | work, understanding of       | compilation, interpretation, |                              |
   |                              |                              | and paging.                  | network protocols and socket | JIT compilation, garbage     |                              |
   |                              |                              |                              | level programming.           | collection, heap, stack,     |                              |
   |                              |                              |                              |                              | memory addressing...         |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+


.. table:: Software Engeneering

   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   |                              | 2\ :sup:`n` (level 0)        | n\ :sup:`2` (level 1)        | n (level 2)                  | log(n) (level 3)             | Comments                     |
   +==============================+==============================+==============================+==============================+==============================+==============================+
   | source code version control  | Folder backups by date       | VSS and beginning CVS/SVN    | Proficient in using CVS and  | Knowledge of distributed VCS |                              |
   |                              |                              | user                         | SVN features. Knows how to   | systems. Has tried out       |                              |
   |                              |                              |                              | branch and merge, use        | Bzr/Mercurial/Darcs/Git      |                              |
   |                              |                              |                              | patches setup repository     |                              |                              |
   |                              |                              |                              | properties etc.              |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | build automation             | Only knows how to build from | Knows how to build the       | Can setup a script to build  | Can setup a script to build  |                              |
   |                              | IDE                          | system from the command line | the basic system             | the system and also          |                              |
   |                              |                              |                              |                              | documentation, installers,   |                              |
   |                              |                              |                              |                              | generate release notes and   |                              |
   |                              |                              |                              |                              | tag the code in source       |                              |
   |                              |                              |                              |                              | control                      |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | automated testing            | Thinks that all testing is   | Has written automated unit   | Has written code in TDD      | Understands and is able to   |                              |
   |                              | the job of the tester        | tests and comes up with good | manner                       | setup automated functional,  |                              |
   |                              |                              | unit test cases for the code |                              | load/performance and UI      |                              |
   |                              |                              | that is being written        |                              | tests                        |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+


.. table:: Programming

   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   |                              | 2\ :sup:`n` (level 0)        | n\ :sup:`2` (level 1)        | n (level 2)                  | log(n) (level 3)             | Comments                     |
   +==============================+==============================+==============================+==============================+==============================+==============================+
   | problem decomposition        | Only straight line code with | Able to break up problem     | Able to come up with         | Use of appropriate data      |                              |
   |                              | copy paste for reuse         | into multiple functions      | reusable functions/objects   | structures and algorithms    |                              |
   |                              |                              |                              | that solve the overall       | and comes up with generic    |                              |
   |                              |                              |                              | problem                      | /object-oriented code that   |                              |
   |                              |                              |                              |                              | encapsulate aspects of the   |                              |
   |                              |                              |                              |                              | problem that are subject to  |                              |
   |                              |                              |                              |                              | change.                      |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | systems decomposition        | Not able to think above the  | Able to break up problem     | Able to design systems that  | Able to visualize and design |                              |
   |                              | level of a single file/class | space and design solution as | span multiple                | complex systems with         |                              |
   |                              |                              | long as it is within the     | technologies/platforms.      | multiple product lines and   |                              |
   |                              |                              | same platform/technology     |                              | integrations with external   |                              |
   |                              |                              |                              |                              | systems. Also should be able |                              |
   |                              |                              |                              |                              | to design operations support |                              |
   |                              |                              |                              |                              | systems like monitoring,     |                              |
   |                              |                              |                              |                              | reporting, fail overs etc.   |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | communication                | Cannot express               | Peers can understand what is | Is able to effectively       | Able to understand and       | This is an often under rated |
   |                              | thoughts/ideas to peers.     | being said. Good spelling    | communicate with peers       | communicate                  | but very critical criteria   |
   |                              | Poor spelling and grammar.   | and grammar.                 |                              | thoughts/design/ideas/specs  | for judging a programmer.    |
   |                              |                              |                              |                              | in a unambiguous manner and  | With the increase in         |
   |                              |                              |                              |                              | adjusts communication as per | outsourcing of programming   |
   |                              |                              |                              |                              | the context                  | tasks to places where        |
   |                              |                              |                              |                              |                              | English is not the native    |
   |                              |                              |                              |                              |                              | tongue this issue has become |
   |                              |                              |                              |                              |                              | more prominent. I know of    |
   |                              |                              |                              |                              |                              | several projects that failed |
   |                              |                              |                              |                              |                              | because the programmers      |
   |                              |                              |                              |                              |                              | could not understand what    |
   |                              |                              |                              |                              |                              | the intent of the            |
   |                              |                              |                              |                              |                              | communication was.           |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | code organization within a   | no evidence of organization  | Methods are grouped          | Code is grouped into regions | File has license header,     |                              |
   | file                         | within a file                | logically or by              | and well commented with      | summary, well commented,     |                              |
   |                              |                              | accessibility                | references to other source   | consistent white space       |                              |
   |                              |                              |                              | files                        | usage. The file should look  |                              |
   |                              |                              |                              |                              | beautiful.                   |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | code organization across     | No thought given to          | Related files are grouped    | Each physical file has a     | Code organization at a       |                              |
   | files                        | organizing code across files | into a folder                | unique purpose, for e.g. one | physical level closely       |                              |
   |                              |                              |                              | class definition, one        | matches design and looking   |                              |
   |                              |                              |                              | feature implementation etc.  | at file names and folder     |                              |
   |                              |                              |                              |                              | distribution provides        |                              |
   |                              |                              |                              |                              | insights into design         |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | source tree organization     | Everything in one folder     | Basic separation of code     | No circular dependencies,    | Physical layout of source    | The difference between this  |
   |                              |                              | into logical folders.        | binaries, libs, docs,        | tree matches logical         | and the previous item is in  |
   |                              |                              |                              | builds, third-party code all | hierarchy and organization.  | the scale of organization,   |
   |                              |                              |                              | organized into appropriate   | The directory names and      | source tree organization     |
   |                              |                              |                              | folders                      | organization provide         | relates to the entire set of |
   |                              |                              |                              |                              | insights into the design of  | artifacts that define the    |
   |                              |                              |                              |                              | the system.                  | system.                      |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | code readability             | Mono-syllable names          | Good names for files,        | No long functions, comments  | Code assumptions are         |                              |
   |                              |                              | variables classes, methods   | explaining unusual code, bug | verified using asserts, code |                              |
   |                              |                              | etc.                         | fixes, code assumptions      | flows naturally - no deep    |                              |
   |                              |                              |                              |                              | nesting of conditionals or   |                              |
   |                              |                              |                              |                              | methods                      |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | defensive coding             | Doesn't understand the       | Checks all arguments and     | Makes sure to check return   | Has his own library to help  |                              |
   |                              | concept                      | asserts critical assumptions | values and check for         | with defensive coding,       |                              |
   |                              |                              | in code                      | exceptions around code that  | writes unit tests that       |                              |
   |                              |                              |                              | can fail.                    | simulate faults              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | error handling               | Only codes the happy case    | Basic error handling around  | Ensures that                 | Codes to detect possible     |                              |
   |                              |                              | code that can throw          | error/exceptions leave       | exception before, maintain   |                              |
   |                              |                              | exceptions/generate errors   | program in good state,       | consistent exception         |                              |
   |                              |                              |                              | resources, connections and   | handling strategy in all     |                              |
   |                              |                              |                              | memory is all cleaned up     | layers of code, come up with |                              |
   |                              |                              |                              | properly                     | guidelines on exception      |                              |
   |                              |                              |                              |                              | handling for entire system.  |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | IDE                          | Mostly uses IDE for text     | Knows their way around the   | Knows keyboard shortcuts for | Has written custom macros    |                              |
   |                              | editing                      | interface, able to           | most used operations.        |                              |                              |
   |                              |                              | effectively use the IDE      |                              |                              |                              |
   |                              |                              | using menus.                 |                              |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | API                          | Needs to look up the         | Has the most frequently used | Vast and In-depth knowledge  | Has written libraries that   | E.g. of API can be Java      |
   |                              | documentation frequently     | APIs in memory               | of the API                   | sit on top of the API to     | library, .net framework or   |
   |                              |                              |                              |                              | simplify frequently used     | the custom API for the       |
   |                              |                              |                              |                              | tasks and to fill in gaps in | application                  |
   |                              |                              |                              |                              | the API                      |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | frameworks                   | Has not used any framework   | Has heard about but not used | Has used more than one       | Author of framework          |                              |
   |                              | outside of the core platform | the popular frameworks       | framework in a professional  |                              |                              |
   |                              |                              | available for the platform.  | capacity and is well-versed  |                              |                              |
   |                              |                              |                              | with the idioms of the       |                              |                              |
   |                              |                              |                              | frameworks.                  |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | requirements                 | Takes the given requirements | Come up with questions       | Understand complete picture  | Able to suggest better       |                              |
   |                              | and codes to spec            | regarding missed cases in    | and come up with entire      | alternatives and flows to    |                              |
   |                              |                              | the spec                     | areas that need to be speced | given requirements based on  |                              |
   |                              |                              |                              |                              | experience                   |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | scripting                    | No knowledge of scripting    | Batch files/shell scripts    | Perl/Python/Ruby/VBScript/   | Has written and published    |                              |
   |                              | tools                        |                              | Powershell                   | reusable code                |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | database                     | Thinks that Excel is a       | Knows basic database         | Able to design good and      | Can do basic database        |                              |
   |                              | database                     | concepts, normalization,     | normalized database schemas  | administration, performance  |                              |
   |                              |                              | ACID, transactions and can   | keeping in mind the queries  | optimization, index          |                              |
   |                              |                              | write simple selects         | that'll have to be run,      | optimization, write advanced |                              |
   |                              |                              |                              | proficient in use of views,  | select queries, able to      |                              |
   |                              |                              |                              | stored procedures, triggers  | replace cursor usage with    |                              |
   |                              |                              |                              | and user defined types.      | relational sql, understands  |                              |
   |                              |                              |                              | Knows difference between     | how data is stored           |                              |
   |                              |                              |                              | clustered and non-clustered  | internally, understands how  |                              |
   |                              |                              |                              | indexes. Proficient in use   | indexes are stored           |                              |
   |                              |                              |                              | of ORM tools.                | internally, understands how  |                              |
   |                              |                              |                              |                              | databases can be mirrored,   |                              |
   |                              |                              |                              |                              | replicated etc. Understands  |                              |
   |                              |                              |                              |                              | how the two phase commit     |                              |
   |                              |                              |                              |                              | works.                       |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+


.. table:: Experience

   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   |                              | 2\ :sup:`n` (level 0)        | n\ :sup:`2` (level 1)        | n (level 2)                  | log(n) (level 3)             | Comments                     |
   +==============================+==============================+==============================+==============================+==============================+==============================+
   | languages with professional  | Imperative or Object         | Imperative, Object-Oriented  | Functional, added bonus if   | Concurrent (Erlang, Oz) and  |                              |
   | experience                   | Oriented                     | and declarative (SQL), added | they understand lazy         | Logic (Prolog)               |                              |
   |                              |                              | bonus if they understand     | evaluation, currying,        |                              |                              |
   |                              |                              | static vs dynamic typing,    | continuations                |                              |                              |
   |                              |                              | weak vs strong typing and    |                              |                              |                              |
   |                              |                              | static inferred types        |                              |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | platforms with professional  | 1                            | 2-3                          | 4-5                          | 6+                           |                              |
   | experience                   |                              |                              |                              |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | years of professional        | 1                            | 2-5                          | 6-9                          | 10+                          |                              |
   | experience                   |                              |                              |                              |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | domain knowledge             | No knowledge of the domain   | Has worked on at least one   | Has worked on multiple       | Domain expert. Has designed  |                              |
   |                              |                              | product in the domain.       | products in the same domain. | and implemented several      |                              |
   |                              |                              |                              |                              | products/solutions in the    |                              |
   |                              |                              |                              |                              | domain. Well versed with     |                              |
   |                              |                              |                              |                              | standard terms, protocols    |                              |
   |                              |                              |                              |                              | used in the domain.          |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+


.. table:: Knowledge

   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   |                              | 2\ :sup:`n` (level 0)        | n\ :sup:`2` (level 1)        | n (level 2)                  | log(n) (level 3)             | Comments                     |
   +==============================+==============================+==============================+==============================+==============================+==============================+
   | tool knowledge               | Limited to primary IDE       | Knows about some             | Good knowledge of editors,   | Has actually written tools   |                              |
   |                              | (VS.Net, Eclipse etc.)       | alternatives to popular and  | debuggers, IDEs, open source | and scripts, added bonus if  |                              |
   |                              |                              | standard tools.              | alternatives etc. etc. For   | they've been published.      |                              |
   |                              |                              |                              | e.g. someone who knows most  |                              |                              |
   |                              |                              |                              | of the tools from Scott      |                              |                              |
   |                              |                              |                              | Hanselman's power tools      |                              |                              |
   |                              |                              |                              | list. Has used ORM tools.    |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | languages exposed to         | Imperative or Object         | Imperative, Object-Oriented  | Functional, added bonus if   | Concurrent (Erlang, Oz) and  |                              |
   |                              | Oriented                     | and declarative (SQL), added | they understand lazy         | Logic (Prolog)               |                              |
   |                              |                              | bonus if they understand     | evaluation, currying,        |                              |                              |
   |                              |                              | static vs dynamic typing,    | continuations                |                              |                              |
   |                              |                              | weak vs strong typing and    |                              |                              |                              |
   |                              |                              | static inferred types        |                              |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | codebase knowledge           | Has never looked at the      | Basic knowledge of the code  | Good working knowledge of    | Has implemented multiple big |                              |
   |                              | codebase                     | layout and how to build the  | code base, has implemented   | features in the codebase and |                              |
   |                              |                              | system                       | several bug fixes and maybe  | can easily visualize the     |                              |
   |                              |                              |                              | some small features.         | changes required for most    |                              |
   |                              |                              |                              |                              | features or bug fixes.       |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | knowledge of upcoming        | Has not heard of the         | Has heard of upcoming        | Has downloaded the alpha     | Has played with the previews |                              |
   | technologies                 | upcoming technologies        | technologies in the field    | preview/CTP/beta and read    | and has actually built       |                              |
   |                              |                              |                              | some articles/manuals        | something with it and as a   |                              |
   |                              |                              |                              |                              | bonus shared that with       |                              |
   |                              |                              |                              |                              | everyone else                |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | platform internals           | Zero knowledge of platform   | Has basic knowledge of how   | Deep knowledge of platform   | Has written tools to enhance |                              |
   |                              | internals                    | the platform works           | internals and can visualize  | or provide information on    |                              |
   |                              |                              | internally                   | how the platform takes the   | platform internals. For e.g. |                              |
   |                              |                              |                              | program and converts it into | disassemblers, decompilers,  |                              |
   |                              |                              |                              | executable code.             | debuggers etc.               |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | books                        | Unleashed series, 21 days    | Code Complete, Don't Make me | Design Patterns, Peopleware, | Structure and Interpretation |                              |
   |                              | series, 24 hour series,      | Think, Mastering Regular     | Programming Pearls,          | of Computer Programs,        |                              |
   |                              | dummies series...            | Expressions                  | Algorithm Design Manual,     | Concepts Techniques, Models  |                              |
   |                              |                              |                              | Pragmatic Programmer,        | of Computer Programming, Art |                              |
   |                              |                              |                              | Mythical Man month           | of Computer Programming,     |                              |
   |                              |                              |                              |                              | Database systems , by C. J   |                              |
   |                              |                              |                              |                              | Date, Thinking Forth, Little |                              |
   |                              |                              |                              |                              | Schemer                      |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+
   | blogs                        | Has heard of them but never  | Reads                        | Maintains a link blog with   | Maintains a blog in which    |                              |
   |                              | got the time.                | tech/programming/software    | some collection of useful    | personal insights and        |                              |
   |                              |                              | engineering blogs and        | articles and tools that      | thoughts on programming are  |                              |
   |                              |                              | listens to podcasts          | he/she has collected         | shared                       |                              |
   |                              |                              | regularly.                   |                              |                              |                              |
   +------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+------------------------------+



.. footer:: Thanks to `Sijin Joseph <http://sijinjoseph.com/programmer-competency-matrix/>`_ for the original version of this chart.

    .. raw:: html

        <iframe src="http://ghbtns.com/github-btn.html?user=neoascetic&repo=programmer-competency-matrix&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>

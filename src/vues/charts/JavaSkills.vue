<template lang="html">
  <div class="uk-flex uk-flex-center uk-padding-small">
    <div class="uk-container-small">
      <p><strong>Java</strong> was the first <strong>Object Oriented</strong> and <strong>statically typed language</strong> I learnt. I've took three courses during my study in the Diploma programme which were primarly based on Java. Following are the skills I've gained working with Java programming lanugage:</p>
      <ul class="uk-list uk-list-divider skillPoints uk-margin-left uk-padding-small">
        <li>Knowledge and understanding of <abbr title="Object Oriented Programming"><strong>OOP</strong></abbr> concepts like Inheritance, Encapsulation, Polymorphism, and Abstraction</li>
        <li>Working with various collections or <strong>Data Structures</strong> avaiable in Java (List, Map, Set)</li>
        <li><strong>JDBC, File I/O and Serialization</strong></li>
        <li><strong>Exception handling</strong> (checked and unchecked)</li>
        <li>Working with the <strong>JVM and Memory management</strong></li>
        <li>Basic understanding of <strong>Multithreading</strong> and synchronization</li>
        <li><strong>Java GUI development</strong> with Swing/AWT and <strong>Java FX</strong>.</li>
        <li>Code modularization, and using Classes and Interfaces effectively</li>
        <li>Working with external libraries and resources like <a href="https://github.com/google/guava">Guava</a> (Google Core Libraries for Java)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "JavaSkills"
}
</script>

<style lang="css">
ul.skillPoints {
  list-style: disc;
}
ul.skillPoints li::before {
  content: "";
  display: none;
}
ul.skillPoints li::after {
  content: "";
  display: none;
}
</style>

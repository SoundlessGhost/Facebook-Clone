import './Swiper.css'
const SwiperSS = () => {
  return (
    <>
      <div className="carousel carousel-center w-98 py-5 bg-slate-100">
        <div className="carousel-item" id='cat'>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_X49TR1qtZ-cuzir9BBQJoQXDkDy0dV5niVXv8VjXfGttw1LGzuL8zyOoR8vxkV87AtA&usqp=CAU"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33f1oGyKLeSTSCu6uis9lCASgi1YENPW_Pm-iJ26ubkIuvPOTYdgHPULgMk-EvrfGXzU&usqp=CAU"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://images.unsplash.com/photo-1616052886962-b340fc943b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://i.pinimg.com/originals/a4/0f/a7/a40fa7178115885662c85b2aa68a825d.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ0NDQ8NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolHhUVITEhJSktMC4vFx8zODUsOiguOi4BCgoKDg0OFQ8PFS0ZFR0rKystLS03Ky0rLS0rKy0rKysrKystNysrNys3Ny0tKy0tKy0rNy03KystLSsrNystMP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQMCBAUGBwj/xAA+EAACAgECBAQDBQQHCQAAAAAAAQIDEQQSBRMhMQYHQWEiUXEUMoGRoQhyseEjM0JSYrLxQ0RjgoSSwcPR/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAbEQEBAQADAQEAAAAAAAAAAAAAEQECEjEhUf/aAAwDAQACEQMRAD8A8WwTgySJSNudQkSkSkZJFiVjgYM0icCFYYJwZYJwWJWOBgzwMAY4GDPAwBhgbSzaNoFe0bSzaNoFe0jaW7RtEKp2kOJdtI2ki1p3R65KzecSqynPboZ3i3nJrATWG18iTKtpIyUTJIySOscqwSJwZpEqJUY4GDPBO0DDBO0z2mSiWIrUSdpYok7QK9o2luwnaBVtG0u2k7AKNo2l+wnYFUbCNpsbCNhFUbTFwNjYQ4ga7iU3SUVl/h9TbcTi9Vbul0+6ui9/czy+Ln1S2SQDm6OUUTJIzUTJRO7grUTJRLFEyUQKtpkolqgSoFRUomW0uUDJQApUDJQL1AyVYGvsJUDZVZmqgrVVZKrNvlDlhWryxsNvlkcsDU2EOBtusxcBBqOBhNJJt4SXdvojcdZo8XilTLPzjj65Jvhji9ZrN3wwbUfV9m/5GmCTju12zIgAkg55RMlAtjAsjA9DzqVAzUC5VmagUUKBkoF6gZKssRUqzJVmxGssjUFayrM41G5GkzVRFjVVRmqjaVZOwNNXljlG2qyVUBpusx5ZvOojlgjR5RDqN51mDrA0ZQOB8SZTqj6fG8e/Tqdr5J1fxY8WVR9VCUn9G/5Gefi8fXBAA4OiCSAB22MC2MDOMC2ED1PMwjAyVZfCstjUFaqrLI1GyqC+ukGY14Ul0aTYjWWKsN5jXVZPLNlVlkaSK01WZxpN+GnMuQSrGiqQ6jddZjyQNPlh1G+qCeQKRxnJMlpzkXVjsjCcBSOPlWdL8ZuPPrS+/GvE+nZZzH+LO/yqPMfEOo5urvljG2brXuofDl/XBnnvxc9ccADi0AADvsay+FZdGouhUet5lUKzYhUXV1F8ayNZjXjUWxqL41l0KSNZjVjUWxoN2uj2L40krWY0YacuVRtKsyVRmtNVVkqo3FSSkgNRacnko2ZGGANdwIVZsqvJnyMAaUqzDlG+4GLq9ey9S1HC8W1MdPRbfPGK4tpP+1P+zH8XhHj05uTcpPMpNyk/m28tnafHvHa9TZXTp576adzlJZUJ2t4yvmkl392dUOXLauYAAyoSQAPVoVmzXUXQp9jaqoyvddcex6t1wzGvGosjWbMai2NZmtRVXQbEai2us2K6jO63jWjWWRqNxUIlpLsSqojR8yXFeha4mOPkCqZRMGjZ5ZlGkqNPllkaTdjpyxVJEpGkqvkZKj5m3j2I5TZKrTlBHWPMO2dfDL3ByjulXXJxx1rlLEk+nZrod0Wm+Z0Xzb18KdHDSJJ2aqal+5VXJScvq3tX5jdHkAwSRk5qADIEEgAe511l8I+q6MxribNcD0OOayVeeq6f3l8vdexZGssrWOqLnDKyu3qvkzLbCEUi6MjCNbLI14ItSNpbGJmqiFa/LM1UbCqMo1CiiNRYoHl+q81LIa5wjRV9hhc6553vUSgpNOaecJ+uMe2T1aMeia7PqiVVWwzjSXKJmogVKpE7C5QJ5RBqyR4r5x2yfEq4OWYw0lbjH0i5Tnn88L9D3Tlnzr5j8Rr1PF9XZTLfVF10wl0cXy4KMnH/AA7lLD9e5NV1kAEAYAAAAD6EhWXRrNmFRdGo7VyjXrrNmuOP/nzRZGovjUZ3WlaqXddv4exmqS+ur/QuVX5EqtVUlkKzZVZPLJRSoHnnjnzBlotRLSaKFVltaXPsujKUK5tZ2RSay8NZecLOOvXHpkaz5l8WajmcR19n97W6nH0Vskv0QVb4T4ZXr+LUU3SjVC66drioNwntbsdKy/hTSaTy/TufR8avbB8uaa1xnGUW4yTUotdHGS7NfR4PqnSSc6q5tYc64Ta+TcU8DwYxqMlAu2k7SCnaRsL9o2Acbxa+NOl1F1klCFVNs3JtJLEX8z5TSPZPP222MOHwU2tNZLUOcFlbrY7Nrl80k3hfU8bZFMAgAAgAGSTEAfUsKS6OnLIotil7mqyrjUZxrLVEzUSCuMCyMDNRM1EKwVZkoFiiZbSCtRPmDxrwv7HxTW6Vz5my7ep+rjZFWpP3Smk/ofUiifN/m9p1Vx3WfK1UXLq5fepin9OqfQo6rT3X1PqXwzdzeH6C14zZotLN47ZdUWz5SVuOx9JeXHiTh92h0ei0uqjK+jT11ypt/ornNR+LbGWNyy393PQUdv2DaWYJwQV7RtLUiVEK8X/aA4lXjQ6FNO+Mp6mf/Dra2RTfu93T/D9Dxs5vxvqbbeLcRnfPm2R1l9W/CjmFc3CKSXZJRS/A4QAAABBIAgAkD60hWWxgTFFkYipGKiZqJnGJYkKRWoGaiWJGSQqxWokqJckSogiraeGftCcMUNXodWs51FFlE10xmqSaf1asx/yo962nkH7RlkFpuGQf9a79ROPX/ZqEVL0+bj6/yDqHlv5bR4vo9Tqbb7dPsuVGncIRnFyUd03JPq18UEsNeo8T+Umt0FN2sjqNNfp9PDmykpTpvST7qLWM/SR655OaLleH9BuWJW8++Xvvuntf/aomHnTcoeHtcs4dktLXHC7v7RCTXt0iwOv+RPHdZrNPratXbK+vSy0yost+K1b1Zug595JbY4z2yepKB5j+zxp8cL1drX9Zr5RT+cYVV/8AmTPVAK1A8481/MSXC8aLRxhLW3U8x2yeY6SMniMtuMSm8SaTeFhNpp9eQ80fH8OFUOihqfEb4Zqh3VEHlc6f5dI+r9j5q1OonbOVls522Te6dlknOc5fOUn1bAi2yU5SnOTnOcnKcpPMpSby236tswAAAEASQAAAAHtGh86qGn9o0V9bz05N0Lk177lHBzGl84uFy+/HWVfv0Rl/lmzwEEg+o+B+NuHa1xjp9XU7JPbGmx8m6TxnChPDl+GTsSkfHLO7eD/MvW8PcK7JfbNImt1N7crIR9eXZ3X0eV7Im4r6TUzNTOA8MeKNFxOvmaO2M5RinZTJbL6c+ko/plZXuc4o+xns11WqRO8rUfYyL2OrNSPAv2htXKfE9HR3jVoVNLHXfZbNP9IRPeup4X5707eM8N1EpbIS01UHLDezl6ibcunfpNfkXNTce6cP00aaKaa4qEKqq64RSUVGMYpJYXbsdQ856N/h/XdYrY9PZmUlBfDdDp17t9kvVtHcYXqSUl1UkmmuzT7M8k83PMXRy0+s4PRB6u2yMK7bozitPRNSUuj675xcY9FhJvvlNFzc1NyOt+W3mjVwrRfYtTpbLIRtsthbp5R3tz6tTjJr1S6p9n7ddrxX513X6eNPDqXorLI/018pqyyv4n8NXRLslmTXq0uyZ5LkFRbqdTO2crbpzttm907LJyssm/m5Pq2VAgCQQAAAAAAAAAJAAAkgAX6TV2UzVlFltNiTSspslXNJ91ui0zlKvF3Eofd4lxBf9Zc1+rOEBJi3XZ6vMDi8e3EdW/3pqf8AmTL4eZnGV24hb+NVEv4wOpECZ+F39dzXmnxpf7/J/XTaV/8ArOD8R+I9TxG2F+tnC22FfKVkaq6pOvLaT2pZw2/zOIAmF13zhXm3xXT010KenuhVCMISvp32OKWEpSTWenqzo19m+c54jHfOU9sFiEcvOEvRGAEKEEkFQAAAAAAAAAAAAACSABIIJAAAABkAACAJBGQAAAAAAAAAAAAAAAAAAAAAAASAIBIwAIJGAIBJAAAAAAAAAAAAAAAAAAAAAAAAAE5BAAkEAAAAAAAAAAAAAAAAAACABIAAAAAAAAAAAAAAAAAAAAAAAABAEggAAAAJAAgkAAAAAAAAAAAAAAAAAAQwACAAAABQABH/2Q=="
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0YB_jgHsL7kzjy-UC671cOfQq4RcZAZJqA&usqp=CAU"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://img.freepik.com/premium-photo/picture-ship-sailing-ocean-vector-tshirt-art-design_162944-1771.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yOV92aW50YWdlX2NoaW5lc2VfYXJ0X29mX21vYmlsZV93YWxscGFwZXJfbW91bl82YmNiMmE0Mi0yMjNkLTQ4NmEtYjQ0Zi0wOGRlZjdlNWJlYzlfMS5qcGc.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="carousel-item"  id='cat'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_L9TAoPSIQ19eg0a9n9KGingdBmwHgS1XL7wqre-TUp4YLHXa8ONGjhYdkWt_-Lpg4Dw&usqp=CAU"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default SwiperSS;

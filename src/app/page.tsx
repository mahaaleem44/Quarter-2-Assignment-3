import Header from "./components/header"

export default function Home(){
  return(
    

<div className="parent">
<Header/>
    <div className="child">
      <h2>I, Maha Aleem</h2>
      <p>This is my official website to display <br />my skills and work experience.</p>
      
      <button>Download Resume</button>
      </div>

      {/* div for imagess */}

      <div className="images">
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEAQAAEDAwIEBAMFBgUCBwAAAAECAwQABRESIQYxQVETImFxFDKBB0KRodEVI1KxwfAkM2Jy4RaCJTRDRJLC8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACYRAAICAwABAwUAAwAAAAAAAAABAhEDEiExBBNBBSIyUWEUFTP/2gAMAwEAAhEDEQA/APFQCrlXYjuHlip2GxReDFSvGRVow2ITyqABMV3tS+GdHSt9EszLqBkV1IsKEjpVf8VnL/sI3R52tpaeYritXOtiEZ2zQCXG05086hLG4nXjzKa4U6kQytXKu2G9SsUZgRAojalGNs1PJqrYIEV3tTiK7/DW8t1obcA1Dn6UQVw60lGrFdK9K2rOCf1GMXTPNFR3E8xUSkkcxW4n2lCM4/lWdmxdBNTnicS+L1KyeAR0zSCCrlXejzFNE4UMLxkVNRbZeU1FWDRFcVyrr4J7PKtrb7O2vGe9G2+HWSnOK6I+mbOHJ9QhF0eY/COjmKjUyoc69DuFnabB0j8qzU+GEZ2rM8OpTF6uOQz1MedTvt4OAKnhw/EIzUaZ1OVdKaWlK5Cp24Tq+Y2rU22zJcxnetPC4dbKRlOc+lXh6dvrOHL9QjB0ecoty9OdCsUy4WOaTXpUmyoaBTpwR0IoDPgBIOBVH6akSh6/dmMUxp5CkjY4olLY0k7VQUn+IfWudxpnbGeyJmnMVbbe251SZQpSgkAknl61pP8App9l3zuNraCEqW6jdKCd9JJ2yKrBNksjivIHW6Skkbj0qs5qPQ4rbvcOWZsNITeIzrqk5UA4RoPbOKr33gyTbYrcxJS7GcGQtCgoe2R1rTgRWSJjd67CSdztV0tADAFRLHelrRRTsqhJBNRnY71bDWoGm+FzvWWjSmimwRqxR62qA01mEu6VZorBlhOP1rGKST6Uz421w3tvcAbGasSlgo5isxEuehIOfzqd67pUnB/nXorJHU8WXppb2RXFQyeXWs1MwSaIS5gWTpoS9qXnFcOaSZ63poOK6RRsBytBbCARyrNoQtC84opDk+GRn+dTxOmWzR2XDfWpWAijbqgWKw9uuqU4yeXrRkXVLjekKr0oZItHgZsE9ji5q+baspcTuc0auEhSsnNZmc6orOeVQzSR6HpYNFDSPHo5bsAis+CS5kUXgqVkbVy4307cy+021rUNvetI0oBo1irfIKMZOKKKvKG0YJ/OvRjJJHhZsMpS4WbmoEGsncyDmr027IWCAqgU14ufKPzqOWaa4dfpcUo+QW8AXKIW8gkDl60OLLilnpjr0opaIEyU6hqLHedWv5QhO56fzIH1rlinZ6OStfJ6dwlw4mXEZll3KV/dA3GFhJGfY5rWRWWGvh/AbCQpnXlKPPkg/fOR9KyNlVfbY1Etx8BgLkKw5qCik6MqzzGAkZrQRI7bkRK3JTsqIGklDoUW0tIOsZIOeRRjGa6W38s8qUe8RVvykuTnMKCs43znfSARnryrPzLNPfRqbiOEaVLGU4yBzx+NbQtQYwefa0BC2PC0dlhOsn6p0/jQy/3lq0zJMwOsMu/DOhj/ABfiKdWQkp8nJI2IxWvc5qkYjgezk/2ZKBwhDmKQq5XAslcX4tLTLepam9889gdq88uJjfGO/BeL8Nq/deLjXp9cbV6FduNrcbsxOhxHdH7NXGWzkJ0uL1cj2Ga82cSSfaoT6epgTQd4XhqfdDgSCvV4bXoo81fQH8SD0o9NfuNzjJt1sSTaoyiNeQlLi+qiTzHaqNiKo9ocdQfM3CdcGB95StIP0zXQhypXDUFuO046r4hwFKElXbpW4cRLJ2XTkW2KwP8AGXSOCOaWcuK/LatDaJb9tmXDhxbwfjupIQVp+VQGoKA6bUAY4Xu5bKpDKI6SPmfdSgfmaKvNOnjUSEj9yr94l0fKsBsAkHkRmqVZFpfAHvFvYjQ2ZKJKVOuuqSpgJx4YAB5/WgpBPKid/kJIZ0n51KX9NgP5H8KDl8CpyaK406LDKMnepiUjlVBMgg5FLxid80lJGtGwNgdqkRtyqPNdpNcaPRJ0vLHI05kOY+aohSp2zOqs68RRO9SIJqIc6mQKasTZ0qojkHapinauDToEzplxxPI0TjyHO9DGxRKKmqY7sjmoncdWtO9DZCdRO1GNA0naqb6BnlVJxbI45pPgNSxvsKvR0lPSklAzV5hA5YrMYG8k7GLqkp8tU33nNxk1fcb2O1V1NjNbkmSg4kNvjvTZKWUqAKsnJ9BnHv8A1otKsZYjGQh1DiEqKVBLqVkEe3L2/OrnC0Zl0voUCXHSllBSkkgHKl4x1IRp/wC40dusJlDrSo8cx0uIUlaAgIyEpyMpBJ/HvTjDhieXo3BNtt71vU/MhMOhMjCnnR/lYCSnfpk7euaLTeILda5L6pb4D7EtvwgFocV4KlpK/k2GNHy8+VeevvrWhSAdLasEtpOEkgYzjvQyUc/Sk6Q4pyNvM44tUbSYkaRJdZfLjSi2mO15k6SChJJIxt0O9Z+6cYS58dUVmO3GhYQlLCMnSlOrAyee6iT3JrNqT2G9OlCg3kDf2qalJsv7cEgm/ep0pZXIkurUo75Ud9sfyAH0qHWVZydhzqFseYA8/XrV+G1F+KbYuLjjTH/qLaTqKf1rcW35MNRXwDXRzqEjbfnVp8IDyw2oqbCjpJG5HQ11Gh+KBIlKLEXlqxkrPZA6n15DqeQOWulYh/hgmRHbjpAJdS5DIKsAKc3QSegzkfSi7l5h2BBtarbPS8z5XkuSy2lTnU4SMkdt+VZdu7FgtoYj6IBJSUb4X6lXMqGxz06UbTeI8xITM+HnADYS3A08B/vOAfcHPpVY+DnyRd2QOcWveITBtkFlzOx8IuL/ABVmjE9+4t2JDtzmtmXJ1JQxgAxmvvLIHLO23tQESocF4yIwjRnMnSfH+IWn/aE5A+pFAbrdlSdaGSsIWcrUs5W4fU/0pSnQ449vghuEsSH9SAUtpAQ2k9Ej+veqxVUJVmlqrncmzqUEiVKsV34hqulVOVUWGpVJrpK6jpA1I6KLAXtThWahFSJpiJEnBqVCwKhBFdZrSZhosFwYqNS96jzSzTsKJULohGkBPOhQNSpXTjKmTnDYNfGJxULjwVyoeF11rqm9kvaSLQd351ZalpTQzXTFeKSkx+3YYVMSR61WcfB3oeXaXiZp+5Ylio1PC0r984hLSXHEkPBOrClBIUFJT6kL29qO3K4Qm21PNxHWY7bZDfip0KUokZODvjGU+6vSsFDnvQ3CtlWArAUnooZzv9akuNzem5KiEk8xknOOW57VpZFRN4bkX5BToLzC9bH8XVPoodDQ6TqS224Rs4DiuIMh1jBRgKWdBBTsoHoR1FahFtgXG4QW4MlQeDnhuMadmwOoPvR+RpxWPwHeCuBWno6Z93GNQ1JaXtgeo7+laK6SuFbc0lh9ccazo0pSk6duo6fWswp28cbcRPWu0SVx7ewnw3Fg4TpB3J9zWhifZbw4pS2WrkqTKbSQtIcSdKiNiQOW9NyUSWjk7bMRfuH/ANnt/H25SXoy8kKRuP7HbnWdZBeAQQo4PlOOfpW44A0tSLtw5cCr4gKKUIWdgU5BxQe5Rm+H3vCMbwZzj5WxJePkQyByA/i1de1Nq+o0nT1YP+DYgtIeuDYU6MpETrvvlZ6ZHTn7UCuUx+Q+S6eXlCQMBI6ADoKMXU+JKLoORIa8RPXegshhwhTrTai2jBUoDIT03qU/4Xxr9kCX1aQjUrSDkJzsD7VKp/GD0PSqauaqcklA9MgZqezK6psIsx25FtkyjMZQtogCOs+ZwHqmhpVzruPHkSnPCiMvPOYzpaQVHHsKnds90ZbU45bZiUJGVKLCsD1JxRJtocUkynqpaq4J5b5FMTWLN6kmumKqjzTZosdHNKmpVmzZ2DXaVVFmnBosVE2qugqodVOFU7M0TaqWqodVLVRYUT6qcKqAGu0nfamJomSqu8nAODg8j3rlhtKsqVskczU6kBbbSEKOkcldxTszRDqptfap2YhfcKWs6Rz96NW3hwOuJU+sNsDdx1w4Ccdc9azKZuGO2CHLfMRbRcVtH4VTgZ16s4VgkAjpkA/hVQK37mtDxFcoz0NNptBUITLniuKXzfdAIB9ABqx3oG20nyZJ1YyOR/I86ItsJxS8BODYpc2IuSjIQkA79dwNu535DeoIchq3PPonQm5OppSAFkjQo8lDHUVpZk74GQmG7AgSMupZK3m1Et5Qk5RpUAk7npzoPcYLcmLFlqdaYLzAOHHNOT6DrV2kuo51b8lO1NeNOhMjkp3kfxrf/Z3b4jouVxW2rKG1kHUeRBJzWPjItcWa067MVltRVhlk7AZ33ArefZ4qNJt90YiF3S4wMh0J1FZT5j5dsZzinj8k834kNrdkWL7L0uWpCzcbxKLaC0MrKdxgY64BrO2mBxfa7XJetD8hlS3nGpDMcjxct41HPPAKsbGiiOMhauGLJFgFDk2I+8HUObpCSSNJ676umOVVVcVsQk2pVoitLeYZecSklShHddcKsf6yEhI3/OnSElJElus8y0xrHxRLlOOyJ8woXrUVHSRgFRO+SQc/Siv2wsAxYMr7wcKSfRQz/QVf4qQ8zw3wla5Sh8a9KDzieud1K2910/2lJt7kGIzc5iorWSUuJa1nWEHAx2JqkfxZKX/SJ5utQctluWoAkKU2CrtuMflQ924SocZ5iPIWhiSNLyG9gsbEA/WjX7PjrtdvbauLBAdUoFzU3ndW29CplkmPtj4Yx5ACjktPJOOXPOKjO64deOmwJqTnl+NFLNBEzUtxCi0FhKW0fM6s/dHbuT0FVnLNc2fngSCO6GyofiM0fUXrXYHXmSW3WA20FA4Uha/Moj1xgelYgrfSk/FIIOyrTZ1tsXUuSy2oa7fEV4bKD2UQRk9ySTVJN04clTnFCFJtIJ/dLiuqV4f55rWcI8BsX3hOJcISooluqV4ypLQeOx2AzkJ/DJo1A+y9BUVXZduei4OoMxUtq+i0hJFVvhztq/k88u1rDwQJy23RIH+HubQ2X2DmOf8Au5jrmsdMYdiSHI76Sh1tRStJ5g1reEpWuVKsbpCmntSmNW+hxPb3AodxOwFsx5ODrQr4d0nmcAKbJ9dJ0/8AYKnNXHZFoSalqzO5pUqaol6GpUq5pDOqVc0qAOs0+a4pwaLA6zSzXO9OAVchmnYUdg10DvinQwT835UWiRWA2FKCSfUZNFiopw9S9SNJKDzOM/1FEozTXiIDjgAAxjty6fSoHAnUQMlPapmEsJb85d1dgR+lJs0kjV8OwYbzch+Ol2V4CdRZZR51+2edZfiDiB+5yAHGiw0wohEbcBHfVvur12rcWS0yrdZE3u1OqdKf89kjcJ7gjtXb44f4u/d3VpMWYU4RLbACgfX+IehoQ3b8Hl/xLQyQlWpQ3OP+fenTKTraOlXlBB5b5GKv8U8MT+GpKUStDrDmfBktHKHR/Q8tqCDatE6PQGI8S6Ijz5ExaFLWlzSmMt3UrHyFSflOwG/egHEjpQiHC15+Ha0c9gR0FVLZfZFtiuR2U5S4rUfOodMcgcd6TESVeETZbam8RkeK7qUE4T/pHX2qrla4RjBxfSPx9TfiAHVyOMev5b9vxrRcFcQJtU9TKkEpkI8JW+ySds1k2jqCmx97bNE2XU2uC4XWWnZEpvSnWMllGfmHqSMD0zWYOmPJHaNGu4cai8P8etw7rGaehyXSltbyApIC90KGeucD61u5SOAY9xXxA/OjOOjTpaDoUkFIwNKB12oBwTMtHEloEW8BtyU3lA1fMlPp1q8j7MbB8T4xecUjOfDLpx+tdGl9RyPLTqQEhcQni37QWJyo7ghMI0R0qOPDGdlH1J/vagf2rXBcjiF+3pl+MzFVhO22o8/0rU8b3K22IM2+3R0tOKbADiEbhIyM47DtzOa82vMFMa5l1uZ8bGx4iJQRp8X6E887Yz0rOTipG8S2ns0N8Q6tTTCyPCjI8uw54/5obOO7Y5533q5GWUNKW4Ml0/l/+/zofL3c1J3A8tQlLh1RSslD0+OlKw7IabUMoOtQCvatjcnGZvBstSUlUoSGX1LKs6mygJz/APKsdIuMuTCjxH3SqPHz4KSNk57VoeF57fh+BIHiJSypt5okfvWVHl7j8sj1xrG1dCyLl/o9V+ytKDwXDL8J1YC1gPsbq58jg5rWD4ZY/wDITX15zocC8enznArxeFdeKOD2SmxyjKtKlFTeWwsJz0UPun+dSj7U+MJaRHhsMoWrbLUclQJql1w5Xi2doznCLaV8dxEOrDbfxKtav4RhWaIcVG1KhXVtqePHRLQuO0U5LqPONWeXyq/KrdstcGx2uZPvbp/bDm7DKdy1k7qUeWee1YGY+ZElx5QxrOQM9OQrMnpGn8l4Ledr4IDSpUxrnOkeuafNNQAqVLc8hVhiMVnKthSGQAE8t67QytR5Yoy2w0hv5U1C5pB2oEU0R8Hzbmp0tp9B9Km09RTEAb7UAcpQNWBvRtMJHw+pBAX0zQTxAOW1SouJSAnWCPenQyVbExrUtcdRQOahuKg+MZA1as+mKJ229uRFn7x7VtOH+GLPxbDMqUwUSEq8xZOjUPUChDugdwLxb+zCmO8vVHcOATyTVn7Q7Qi1Fi92xOq1SlAOaP8A27h/+p/n7iqH2icMW3haPDkWxS0h9ZbdZcXqztnUM9uR96LcF3A3fha8WWaouNCOoozvjbaj+M1fyibh91ji7hqXw7PcR42jxojyvuLA2P615XdbdLtNweg3BlTUhk4Uk/zHcetdWq7ybW+09GVhTZ1AVLxLfpPEVzM6WlCFBtLaUp5JSkbUIzKn1A3rj1o9brEX4SpUiQ3HSQMBx5Ler0Gr5j6be9AEKAUCRkA5I71suIDCQ3EE+NIALeUCO6PIDg4wcjt61SCuyOR+EBU25UF9T0vJjteYEbF09E/r2HuM0pMpcqSt1zGVnJxy5YH0rRX6J/4A060ta2mFpSlSue6QdwOwOKymfIB1olzg49VlmPKcjOeNHcU24DspJ3FHf+tb6lkNCdkY+Yjes2GV+GFDzA86nbireQFo04G26gDSUmlwThFvp3InyZkgvynluL6qWrNE7a+iUhUGSnw4pVrC+fhr7+x5EfXmM0PbhJSR47gyeSW/MT+FW48mMyUqdby0390HOpXTPf2rUf6J8VIjuiVxnVNrQUFPlCe398/wqgqJJREE0NL+GK9AdIOkq7Z9qLOSDfAW3EpExA/chA/zEfwf7h077jtQ1tU51sQGS84ypepDKMqCldwkdaUqNRuiFp1LawfDQrAIKVjKTkEZ/PPuK4Q+4y+lxpRStB8qhzq6qw3ZKSoQnD3QnClp90A5H4UPWhTZ0rSUqBwQoYNZ6aTNUnjJ2M7Get0VMVSG0pdCVkhxY5qx69qLS/tVuL0VxpuHHZK0kKW20hJOfUCvPlbAAchXcRTKZLRkpKmNY8QA4JTnfHrWvckybww/RYn3OTNUS8rYnOkGqR3q1czEM5/9nBxMQrJaS4fME+tVaw27KRSS4KmNPSxSGMATsBmpm46lfMPpRCPCGNgavswjjlSAGMxcdKvMxgOYq4lgJ5irCI5V02p0AHk5RsBtQ9ToKq0UmBkErOlPUnpWYleH4pDRyB97vQwLAe8vMUkoekOBLCCvP4VUS4UbjTnpkVK1OfaPlUPbFIZqbLws3IUldykkJ5+E3+tbi3KsdmbVKdjxIyUHIUpAz9M15Qm+z22yht0IB6hO9UpMl+UvXJeW6rus5xWgN5eOJeHprz7r8REhbqydQbwR23qPgLiMWu6JbCj8K4rThdYKithfjNSErmLCUNArAx8xA2FIaC/2nTXpXFsxtUlT0dkp8BJ5ICkpUQPYnH0q39nN/hWudJVcHQ00uMpJJ6noKxkp9yTIdkPKKnHVFSie5qMEjkcUAnR06UeIrwwQjJ0g8wOlcZpUqDIhW/h8Q4s0aTPt0W4QUI+HeS62CpLoT5DqzkA7Z9qwFFeH7s7aLgiQ246hG4X4YBJBGDsduprcJUzM42g7epaJNpcliImKh/T4bKVFWhAAAOTvuQayroa8FCkrV4xJ1AjygdMVevV4cuawHArSNwVq1KJ7n9KGoBVkYJ9hyom7fAgqXRm3FoV5T/XNW/itQ8yQD13/AFFVCMb9Ohpt98VnwaqyyX8aiAjSrGR/xXK3ipWVEnbG/b07VAM8ulX2IsJVqkPuSyiW24kNsafnQRuc+lMTpFRsrS4NBIUk7FPP0rfMLhQmvj7o0n4fUEvNNK0ma7jzJz0R3HLPOsPC3lsKJwA4kfmK1cm1yb3cmoipDUWJHirkrddBCUI1edXqckD8q3j4ieRXwgYutvnSnG2+F0FsKKsRVKUtpPpgfnV2dbo0+CXhIW8yk6UvOj99GV/C51I9/p2onBskqFw/NTwrckyXZEhBZkRVeG64hAOtvOxBGQrT1GarXeUq2cQW5M/QmRNjIRdG0nB1qOAtWOShkK29e9WXVciLfftPP5cdyK8tl9JS4k4I/vpUNbTjPh+VDjvPvBsLhOBh0axkg7pIHUVi655x1lR0Y5qcbFmlSpVg2KlSpUAbZmNp5gVZS2EjGB+FSobqTRTEUlM5VmrjLaG0FbhASkZJPSmdW1GbU68oJQkZOayN5vbk8lprLcUckjmv1NAzq/3f41ZajEpjJ/Fw/pQU86c9+9NSAVKlSoAVKlT0ANSp6VAhqVPTUAKmNPSoGNSp6VADZq5arjKtk1EuEsIfbzpUQD0xyPPaqdKgCRbi1rUpXzKOVbc6ZWgnfb2rkGmNFgdjR/EfwrpBQnoVe+wqGnBxQMlbdUhxKx9wgge29elRX4DtmSqRJUliQw5EnFLeottrOtlwegWADXmW3M0f4bugZeQw4UBBBThY8riTzQr0PMHoffauOXaJZY2rNfaIts4chCJcrnBmibOjOJaac1BDaSrKz2zkAj+HNC+JIMyRaPjrtCZiz25QZaWy0G0voIz5Up2OOh7VTl8KtynNdpmITnnGkq0qR6auShWgj8JP2FhN04kuLLi4uFRoSZGvUociewHPbtVvu8M57ivuvpn/ALR2Zka7JZuLmuUlCQ4c5ydKayFEr9cnLpcHJDiys8tROSfX++mKG1z5HcjoxR1gkKlSpVgoKlSpjQB6a2BXZSM9dqVKmZMDe58iXLcbdX+7bWUpQOQodSpUjQqQp6VACpUqVACpUqVAhU9KlQAxpUqVADGlSpUAKlSpUDFSpUqAOaempUDHpqVKgB6Q50qVABhm+TWrW5BCkFClpWlxScuIxnZKug9KpSp0qR5X31rH+o0qVUbdE1FWVaVKlUyjFSpUqBCpjSpUAf/Z" className="girl" />
     

      </div>
</div>

  )
};



   